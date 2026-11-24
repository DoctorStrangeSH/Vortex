# Firebase security gate (P0)

> **Текущее состояние на 22.11.2026:** владелец подтвердил, что Production Firestore Rules были синхронизированы с актуальным `firestore.rules` из `main`; после публикации правил отправка сообщений восстановилась. Это закрывает инцидент отправки, но не заменяет staging-приёмку, проверку legacy-данных, read receipts и rollback. Firebase Storage остаётся выключенным до отдельной staging-проверки.

## Текущая read-only сверка исходных правил (24.11.2026)

Проверены файлы firestore.rules, storage.rules, firebase.json и .env.example в текущем main. Это **статический просмотр исходников репозитория**, не penetration test, не запуск Emulator и не чтение опубликованных правил Firebase Console.

### Наблюдения по Firestore Rules

- Default-deny присутствует в catch-all match.
- Приватные users/{uid} доступны только владельцу; публичная карточка отделена в publicProfiles.
- Чаты и сообщения требуют членства; sender UID при создании сообщения сверяется с Auth UID.
- Обновление сообщения ограничено отдельными путями edit/read receipt/reaction; создание канального сообщения ограничено администраторами.
- Username claim создаётся от имени UID и сверяется с профилем через getAfter().
- Legacy private chat имеет отдельную узкую ветку обновления preview; это сохраняет совместимость, но требует проверки на обезличенной staging-копии старых документов.
- Публичный список username исключает документы с legacy-полем email; реальные legacy-записи и запросы клиента необходимо проверить в staging.

### Наблюдения по Storage Rules

- Catch-all запрещает прочие чтения/записи.
- Загрузка ограничена членом чата, собственным UID-путём, размером до 25 MiB и проверкой MIME; overwrite запрещён.
- Чтение зависит от Firestore membership lookup, удаление — от отсутствия соответствующего message document.
- Эти правила не являются основанием включать Storage: реальный cross-service permission/IAM, CORS, upload/read/revocation и rollback ещё не проверены на отдельном staging.
- VITE_USE_FIREBASE_STORAGE=false в .env.example; Production flag и bucket settings из репозитория не видны.

### Открытые security-gates — без изменения статусов

1. Сопоставить опубликованные Production Firestore Rules с точным firestore.rules из main через Firebase Console (read-only); не публиковать правила в рамках этого аудита.
2. Проверить Production project ID и дату публикации; не копировать секреты/токены в issue или чат.
3. На отдельном staging пройти положительные и отрицательные правила для приватного профиля, username claim, личного чата, группы, канала, сообщений, реакций и read receipts.
4. На staging проверить Storage cross-service lookup, CORS, upload/read/revocation, orphan cleanup и rollback; Storage остаётся выключенным.
5. Проверить legacy documents и claims на staging snapshot, не выполнять production migration.
6. Подтвердить отсутствие секретов в клиентском bundle и git history отдельным автоматизированным secret scan; этот статический просмотр не заменяет scan.

**Вердикт:** исходники содержат несколько важных ограничений доступа, но Production Rules, реальные legacy-данные и Storage lifecycle не подтверждены. RC security gate остаётся **NOT TESTED / BLOCKED до staging и read-only сверки владельцем**. Никакие Firebase Rules, тарифы, данные или Production settings этим изменением не менялись.

## Как читать этот документ

Ниже сохранена история security-аудитов и диагностики. Формулировки в исторических разделах отражают состояние на дату соответствующего аудита и не должны восприниматься как текущее состояние Production. Актуальный статус и release gates ведутся в [PROJECT_SPEC.md](PROJECT_SPEC.md) и [ROADMAP.md](../ROADMAP.md).


## Инцидент регистрации (2026-11-19): `403 permission-denied`

На публичной странице Vortex создание пользователя в Firebase Auth проходит, но запись транзакции в `users/{uid}`, `publicProfiles/{uid}` и `usernames/{username}` получает `403`. В результате аккаунт существует без профиля. Это **не** ошибка валидации @username и не лечится повторным созданием аккаунта.

**Причина подтверждена владельцем:** опубликованные 19 ноября 2026 г. правила имеют `match /users/{userId}` и `match /usernames/{username}`, но **вообще не содержат** `match /publicProfiles/{userId}`. Клиент сохраняет три связанных документа одной транзакцией, и запрет на один документ отменяет все три записи. Добавлять `allow write: if request.auth != null` для публичного профиля нельзя — это позволило бы подделывать чужие имена.

Текущий production-ruleset одновременно содержит критические разрешения:

- `users`: `allow read: if true` — чужие email и поля профиля могут читать даже анонимные посетители.
- `usernames`: `allow create, delete: if request.auth != null` — любой авторизованный пользователь может занять или удалить чужой username-claim.
- `chats`, `chats/{id}/messages`, `typing`: полный доступ любому авторизованному пользователю, даже не участнику чата.

Поэтому точечное добавление `publicProfiles` не решает проблему безопасности. Исправленный `firestore.rules` в репозитории ограничивает приватные профили владельцем, чаты участниками, username-claim владельцем и проверяет связанные документы через `getAfter()`.

**Миграционный риск:** новые правила не гарантируют совместимости со старыми чатами и документами, созданными по прежней схеме. Перед публикацией в рабочий проект провести аудит/бэкап, staging-проверку и протестировать восстановление уже созданного Firebase Auth-аккаунта. Никогда не публиковать оба набора правил вместе: при совпадении нескольких `match` разрешения объединяются по логическому ИЛИ, а широкое старое разрешение обойдёт ограничения новых правил.

- Клиент теперь сохраняет имя и @username в `sessionStorage` на время восстановления регистрации; пароль туда не помещается.
- Проверка правил в CI выполняется на **локальном эмуляторе**, а не на опубликованной базе: её успех не доказывает совместимость production.
- Доступа к Firebase Console / административной CLI-сессии в среде разработки нет. **Production-правила не менялись.**

### Действия владельца Firebase-проекта

1. Открыть [Firebase Console](https://console.firebase.google.com/) → проект `vortex-messenger-4ea97` → Firestore Database → Rules. Сохранить копию текущих правил в защищённом месте и проверить дату последней публикации.
2. Сопоставить действующие правила с `firestore.rules` этого репозитория, особенно блоки `users`, `publicProfiles`, `usernames` и атомарные проверки `getAfter()`. Не вставлять весь новый файл в production без миграционного аудита из раздела ниже.
3. Создать отдельный staging-проект, применить туда `firestore.rules`, пройти `npm run test:rules` и вручную проверить регистрацию двух новых аккаунтов с разными и одинаковыми логинами, повторный вход и поиск пользователей.
4. Перед production-развёртыванием проверить старые профили и коллекции, сохранить предыдущую версию правил для отката. Обновить **только Firestore rules** после проверки совместимости; Storage rules пока не публиковать.
5. Если ошибка сохраняется и со staging-правилами, в консоли Firestore Rules → Rules Playground проверить операцию `create` для всех трёх документов под одним UID; затем посмотреть соответствующий `permission-denied` в логах.

При ошибке профиля **не удалять Firebase Auth-аккаунт**: зайти под существующими email и паролем и завершить регистрацию в восстановленной форме.

Для запуска Firebase Emulator Suite необходима Java. Запуск `npm run test:rules` создаёт только локальный демо-проект `demo-vortex`.

**Открытый блокер для Storage:** негативные проверки запрета проходят, но разрешённая загрузка участника в эмуляторе пока отклоняется: `firestore.get` из Storage Rules возвращает `null`. Нельзя включать `VITE_USE_FIREBASE_STORAGE` до настройки связи Storage ↔ Firestore и прохождения положительного теста (в том числе в staging). При развёртывании cross-service rules Firebase может потребовать IAM разрешения для service agent.

### Диагностика несовпадения эмуляторов (19 ноября 2026)

- При локальном `npm run test:rules` (Node 24.22.3, Java 21.0.13, `firebase-tools` 15.36.0) два положительных теста загрузки файлов стабильно получают `storage/unauthorized`. Лог эмулятора указывает `storage.rules:6`, `firestore.get(...).data.participants`: `Null value error`. Остальные 31 из 33 тестов проходят.
- В GitHub Actions (Node 22) на PR #15 тот же набор **33/33 тестов** прошёл. Это реальное несовпадение окружений; причина пока не доказана. Не трактовать зелёный CI как подтверждение работы Storage в production и не ослаблять `member(chatId)` ради обхода ошибки.
- Для повторения: `npm run test:rules`; проверить именно строки `stored attachments are readable only by chat participants` и `removed group member immediately loses Storage access`. Сверить версии Node, Java, CLI и локальную конфигурацию эмуляторов с CI. После устранения расхождения обязательно проверить разрешённую загрузку и отзыв доступа реальными двумя аккаунтами в staging.


## Обновление после PR #55–#58 (20.11.2026)

В main объединены:
- PR #55 — безопасное резервирование и восстановление офлайн-очереди.
- PR #56 — повторная доставка с тем же message ID и проверкой существования сообщения на сервере.
- PR #57 — транзакционные subscribe/unsubscribe с согласованными participants, subscribers и subscriberCount.
- PR #58 — транзакционные клиентские проверки выхода участника и управления ролями администраторов группы.

Эти изменения улучшают корректность клиентских операций, но **не являются заменой серверных Security Rules**. Проверки CI используют Emulator Suite и не доказывают состояние опубликованных production rules. Production Rules по-прежнему требуют аудита, staging-проверки и подготовленного отката.

PR #32 закрыт без merge 21.11.2026: callable Cloud Functions не совместимы с зафиксированным Spark без отдельного решения по тарифу. Текущая main сохраняет прямые групповые операции под ограничительными Firestore Rules и Emulator tests; production/staging rollout не выполнен. Callable-backed membership journal отложен за пределы 1.0.

## Изменения security pass (repository only)

- Прямое удаление документов групп запрещено Firestore Rules: без проверенного каскадного удаления подколлекций группа не должна удаляться клиентом. Для личных чатов существующее разрешение владельцу не изменено.
- Создание новых личных чатов проверяет канонический ID пары: два UID в отсортированном порядке и length-prefixed ID, совпадающий с клиентским `privateChatId`. Проверка применяется на create; legacy-документы не мигрируются и не блокируются этим условием при обновлениях.
- Эти изменения находятся в репозитории и Emulator Suite. **Они не опубликованы в production** и требуют отдельного staging rollout по инструкции выше.

## Угрозы, которые должны блокироваться сервером

1. Неавторизованный посетитель не читает закрытые профили, сообщения и документы чатов.
2. Пользователь не читает чат, в котором он не участник; запрос по чатам обязан быть совместим с правилами доступа.
3. `senderId` нового сообщения должен совпадать с `request.auth.uid`.
4. Нельзя менять чужие `senderId`, `createdAt`, `participants`, `createdBy`, `admins` или присваивать себе полномочия.
5. Редактирование и удаление чужого сообщения запрещены. Реакции и отметки прочтения требуют отдельных правил с привязкой к UID.
6. Медиа в Firebase Storage доступны только участникам; проверяются размеры, типы и пути загрузки.
7. Детерминированный личный чат проверяется сервером; чтение отсутствующего документа для транзакции не должно раскрывать чужие данные.
8. Регистрация username выполняется транзакцией с одновременной записью профиля; Firestore Rules сверяют связанные документы через `getAfter()`. Проверить миграцию старых нестандартных username.

**Регистрация:** созданный в Firebase Auth аккаунт не удаляется автоматически при ошибке профиля. Клиент показывает безопасный экран восстановления и позволяет повторить сохранение под другим username. Протестировать это на двух настоящих аккаунтах до релиза.

**Каналы (локально проверено):** подписка и отписка теперь меняют `participants`, `subscribers` и `subscriberCount` одной операцией. Правила разрешают добавить/удалить только собственный UID, запрещают отписывать владельца и позволяют публиковать сообщения и обновлять preview канала только администраторам. Это прототип правил: при загрузке старых каналов нужно проверить целостность массивов и миграцию полей. Инкремент счётчика защищён проверкой действительного изменения членства.

**Следующий обязательный аудит:** проверить подлинность состава личных чатов и совместимость миграции существующих данных в production. Проверки `readBy`/`reactions` на уровне репозитория закрыты field-scoped правилами и позитивными/негативными тестами Emulator Suite; это не подтверждает состояние опубликованных production rules.

**Профили — новый прототип:** чтение `users/{uid}` теперь ограничено владельцем; в `publicProfiles/{uid}` хранятся только публичные имя, username, bio и активность. Поиск выполняется по `publicProfiles`, без email. Новая регистрация создаёт обе карточки и username-claim одной транзакцией. При следующем входе существующего пользователя клиент создаёт его публичную карточку (если отсутствует) и удаляет email из старого username-claim. Старые пользователи, которые ещё не вошли после обновления, могут временно не появляться в поиске. В production **не применять правила без плана миграции** существующих аккаунтов, предварительного анализа полей и теста на staging. Старые личные чаты могут содержать `participantEmails` — нужна отдельная миграция с учётом доступа участников.

**Сохранённые ограничения:** email-поиск намеренно отключён ради приватности. `readBy` и `reactions` защищены на уровне репозитория проверкой участника, UID и допустимого поля изменения. До staging/production rollout эти проверки не являются доказательством защиты опубликованной базы. Storage не включать до успешного положительного staging-теста upload/read/revocation и проверки CORS.

**Последние repository-only исправления (20.11.2026):**
- PR #38: самостоятельный выход администратора группы корректно обновляет `participants` и `admins`; создатель остаётся владельцем.
- PR #39: сообщения не используют приватный email как fallback для `senderName`.
- PR #41: Firestore Rules запрещают создание новых секретных чатов, так как E2EE/secret chats исключены из Vortex 1.0.
- Эти изменения не меняют опубликованные Firestore Rules и не выполняют миграцию существующих документов.



## Обновление после PR #86 и #88 (21.11.2026)

- PR #86 добавил Emulator-проверки read receipts: получатель может добавить только собственный UID; нельзя подделать UID другого участника, заменить/удалить историю или писать от имени постороннего. Объединён в main; Quality CI #642 прошёл.
- PR #88 добавил Emulator-проверки границ делегированного администратора группы: делегированный администратор может исключить обычного участника, но не владельца и не может менять список администраторов. Объединён в main; Quality CI #645 прошёл все шаги: `npm ci`, `npm test`, `npm run test:browser`, `npm run test:rules`, `npm run test:auth`, `npm run build`.
- Это покрытие относится к репозиторию и Emulator Suite. Production Rules по-прежнему не сверены и не опубликованы; staging, миграция legacy-данных, проверка двух реальных аккаунтов и rollback остаются обязательными gate.
## Обновление после PR #90 и PR #91 (21.11.2026)

- PR #90 объединён в main (`bddea465`); Quality CI #657 прошёл полный набор проверок. Channel schema Emulator tests покрывают владельца/администратора, уникальность участников, согласованность `participants`/`subscribers` и `subscriberCount`.
- PR #91 объединён в main (`0598adad`); Quality CI #663 полностью прошёл. Документ без `type` может обновлять только preview fields существующим участником; `participants`, `participantEmails`, `createdBy` и остальные legacy поля остаются неизменяемыми через этот путь. Атомарная отправка сообщения и preview update проверены Emulator Suite.
- PR #92 merged (`4eb7f755`); Quality CI #669 passed all steps. Owner-authenticated repair sanitizes existing public profile projections using an allowlist, removes legacy email/phone/unknown fields, preserves valid public fields, and skips conflicting UID/username records.
- Это repository/Emulator coverage. Production Rules, legacy data migration, staging, двухаккаунтная проверка и rollback остаются отдельными release gates.
## Обязательные тесты Emulator Suite

| Сценарий | Ожидается |
| --- | --- |
| Анонимный запрос к чату | DENY |
| Участник читает свой чат | ALLOW |
| Неучастник читает чужой чат | DENY |
| Неучастник пишет сообщение | DENY |
| Участник отправляет от чужого UID | DENY |
| Пользователь редактирует чужое сообщение | DENY |
| Сообщение + preview одним batch | ALLOW для участника |
| Изменение чужого профиля | DENY |
| Одновременный выбор одинакового username | один победитель |
| Подписка на канал одним обновлением | ALLOW для своего UID |
| Добавление другого UID или повторный счётчик | DENY |
| Подписчик публикует в канале / выдаёт себя за админа | DENY |
| Владелец канала отписывается | DENY |

## Порядок внедрения

1. Экспортировать действующие правила и оценить, какие запросы клиента они затрагивают.
2. Создать локальные правила с emulator-тестами по фактической схеме `users`, `usernames`, `chats`, `messages`, `typing`, `channels`.
3. Прогнать позитивные и негативные сценарии, исправить нарушения схемы в коде.
4. Развернуть на отдельный staging Firebase-проект и проверить двух пользователей, личный чат, группу, канал, загрузку истории и старые записи.
5. Только после этого рассматривать deployment в production с планом отката.

Публичный Firebase web API key не даёт административных полномочий, но открытые Security Rules способны раскрыть данные. E2EE нельзя считать реализованным до независимой проверки протокола.

## Legacy public-profile repair (PR #81, repository-only)

При следующем входе существующего пользователя миграция теперь проверяет username claim до создания публичной карточки. Если claim отсутствует, владелец может атомарно создать свой claim и public profile; если claim уже принадлежит тому же UID, удаляется только legacy email при совпадающем username. Чужой, несовпадающий, неканонический или повреждённый claim не перезаписывается, а public profile не публикуется. Пропуск этой миграции не блокирует доступ к приватному профилю.

Unit coverage и полный Quality CI #630 прошли на точном HEAD PR #81. Это repository/emulator evidence, не подтверждение состояния реальных legacy-документов. Production Rules и данные не менялись; проверка legacy-конфликтов на отдельном staging-проекте остаётся открытой.

### Registration resume with an existing username claim (PR #83)

The recovery form may reuse an existing username claim only when both its UID and normalized username match the authenticated pending account. Claims owned by another UID, claims whose stored username does not match the requested name, and malformed claims remain unavailable. Ordinary registration without a pending authenticated UID continues to treat every existing claim as taken. Unit coverage and full Quality CI #635 passed on the exact PR head. Real legacy-account recovery remains a staging check; production Rules/data were not changed.


## Storage policy test coverage update (21.11.2026)

- Existing Storage Emulator coverage verifies participant-only byte/metadata reads, immediate revocation after group removal, owner-only orphan cleanup, and denial of nonmember/wrong-owner uploads.
- PR #93 merged as `d8ec5d23`; Quality CI #675 passed all steps. The Storage suite covers authenticated positive upload, participant-only reads, nonmember/wrong-owner upload denial, active-content MIME rejection (HTML, SVG, JavaScript, XML/XHTML), anonymous read denial, same-path overwrite denial guarded by `resource == null`, and owner-only orphan cleanup.
- The old local Node 24/Java 21 emulator discrepancy (`firestore.get()` returning null from Storage Rules) remains an environment-specific diagnostic. GitHub CI on Node 22 passes the positive cross-service Storage lifecycle tests. This does not replace real staging verification. A same-path replacement was accepted in the initial emulator test despite `allow update: if false`. The create rule now explicitly requires `resource == null`. PR #93 restores the regression test for initial upload success and same-path overwrite denial; the full Quality CI #675 passed on the exact PR head.
- Storage remains disabled for production use until the approved Firebase Spark constraints, separate staging project, CORS, upload/read/revocation and rollback are verified. Emulator pass is not a production rollout authorization.


## Production message-send permission gate (22.11.2026)

- Владелец сообщил о воспроизводимом отказе отправки в опубликованном Vortex: Firestore Commit атомарной операции возвращает HTTP 403 / permission-denied. В запросе видны создание chats/{chatId}/messages/{messageId} с senderId, senderName, type, text, readBy, createdAt и одновременное обновление chats/{chatId} полями lastMessage, lastMessageId, lastMessageTime. Клиент сохраняет сообщение в локальной очереди, не считая его отправленным.
- На текущем main Security Rules содержат отдельную ветку для legacy private chats без type: существующий участник может обновлять только preview-поля; создание сообщения проверяет членство в чате, валидность схемы и совпадение senderId с Auth UID. Emulator coverage включает атомарную отправку сообщения + preview для legacy-чата и негативные проверки на изменение участников/email и доступ постороннего.
- Quality CI #780 завершился успешно на commit b7a219cf7562b1021fe4bd912169d6970e99feb1; GitHub Pages deployment #148 также завершился успешно. Это подтверждает сборку и repository/Emulator tests, но не фактические Production Rules или схему проблемного документа.
- Причина production 403 пока не доказана. Из клиентского скриншота нельзя прочитать фактические Production Rules и полный документ чата. Нельзя объявлять, что опубликованные правила устарели, и нельзя ослаблять правила наугад.
- Следующая обязательная проверка владельца: сравнить опубликованный Firestore Rules текст с firestore.rules из main и проверить только безопасные поля проблемного чата (наличие type, ровно два уникальных UID в participants, присутствие текущего Auth UID, значения/типы preview-полей). Не публиковать новые правила, если содержимое уже совпадает; в этом случае требуется точная диагностика schema mismatch на staging.
- До подтверждения отправки двумя реальными аккаунтами требование SYNC/MSG о надёжной отправке остаётся NOT DONE для production acceptance. Не очищать browser site data: queued messages may be the only local copies.


## Production message-send incident — resolved (22.11.2026)

- Владелец подтвердил: опубликованные Production Firestore Rules не совпадали с актуальным `firestore.rules` в GitHub. После публикации актуальных правил отправка сообщений снова заработала.
- Первопричина подтверждена владельцем: рассинхронизация Production Rules и репозитория. Предыдущая гипотеза о несовпадении схемы документа чата не подтверждена и не требуется для объяснения инцидента.
- Никаких ослаблений правил, миграций документов, очистки локальной очереди или платных Firebase-функций для исправления не потребовалось.
- PR #138 добавил Emulator-регрессию production-shaped атомарной транзакции: создание сообщения и обновление `lastMessage`, `lastMessageId`, `lastMessageTime`; проверяется чтение обоими участниками и отказ постороннему. PR объединён в main (commit `37e534165cf77816d1800b1c6921ee13612d0da2`). Quality CI #783 прошёл полностью: unit, browser, Firestore/Storage Rules Emulator, Auth Emulator, production build.
- Production отправка: **RESOLVED** по подтверждению владельца. Отдельная staging/двухаккаунтная приёмка на реальных тестовых аккаунтах остаётся частью общего RC checklist, но не блокирует устранённый инцидент.
- Операционное требование: при изменении `firestore.rules` публиковать соответствующие правила в Firebase Console для правильного проекта и после публикации проверять успешный сценарий отправки. CI Emulator не публикует Production Rules автоматически.


## Read receipt identity integrity — PR #154 (23.11.2026)

- [x] Firestore Rules require a read receipt append to preserve the previous list, append only the authenticated participant UID, and keep the resulting `readBy` list unique (`after.toSet().size() == after.size()`).
- [x] Same-participant second-session acknowledgement remains idempotent only when the list is unchanged and already contains that participant UID.
- [x] Rules Emulator regression rejects a duplicated UID in one write, rejects another participant's UID, rejects receipt removal/replacement, and rejects authors marking their own messages as read.
- [x] PR #154 merged as `f647e8ac9f8e1cbc9c568062de71027280dc8c67`; full Quality CI #45134260984 passed on exact PR head `60ef6efe25e19bbeea04efc490705e7c3894fe98` (unit, Chromium, Firestore/Storage Rules Emulator, Auth Emulator, build).
- [ ] Publish reviewed Rules to Production only through the owner's normal controlled process; this PR did not deploy or modify Production Rules.
- [ ] Complete two-account manual read receipt acceptance; Emulator coverage is not a substitute for real client sync.
