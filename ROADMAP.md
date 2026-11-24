# Vortex — Roadmap

> Краткая операционная сводка. Полные требования — в [PROJECT_SPEC.md](docs/PROJECT_SPEC.md), матрица проверки — в [RELEASE_CANDIDATE_CHECKLIST.md](docs/RELEASE_CANDIDATE_CHECKLIST.md), история — в [PROJECT_HISTORY.md](docs/PROJECT_HISTORY.md).

**Версия:** 1.0  
**Дата статуса:** 24.11.2026  
**Релиз:** Release Candidate ещё не принят — решение NO-GO до ручной приёмки.

## Принципы
- Не расширять scope Vortex 1.0 новыми функциями.
- Firebase Spark — обязательное ограничение; не переходить на платный тариф.
- Не менять Production Rules, данные или инфраструктуру автоматически.
- CI/Emulator PASS не заменяет ручную двухаккаунтную приёмку.
- Не заявлять E2EE, MFA, серверные push или звонки: они не входят в 1.0.

## Этапы

| Этап | Статус | Критерий закрытия |
|---|---|---|
| Scope freeze | **DONE** | Scope 1.0 зафиксирован в PROJECT_SPEC |
| Регистрация и безопасность | Автотесты PASS; ручная проверка открыта | Два независимых аккаунта, legacy account и Production Rules review |
| Личная переписка | Автотесты PASS; ручная проверка открыта | Realtime, история, edit/delete, read receipts, offline/reconnect |
| Offline Queue | **DONE** | 100 раундов / 200 сообщений, restart recovery, no-Web-Locks fallback |
| Группы и каналы | Emulator coverage PASS; ручная проверка открыта | Роли, членство, публикации и выход на двух аккаунтах |
| UI и доступность | Browser regression PASS; ручная проверка открыта | Телефон, desktop, клавиатура и screen reader |
| Release Candidate | Не начат | Все P0 и включённые P1 критерии приняты |
| Выпуск 1.0 | Не начат | Явное принятие владельца, публикация и post-deploy smoke |

## Последние подтверждённые изменения
- **PR #164:** исправлена потеря сообщений между вкладками. Общий массив заменён независимыми durable records. PR объединён в main.
- **PR #147:** добавлен Firestore Emulator regression на конкурентный повтор отправки с одинаковым стабильным message ID; тест проверяет одну запись и согласованный preview. Текущий `tests/firebaseRules.test.js` также покрывает гонку разных message ID и выбор последнего committed preview. Это Emulator/CI evidence, не live Production acceptance.
- **CI #45181260085:** полный Quality workflow прошёл на PR head: 296 unit PASS, 57 intentional skips, 55 Rules PASS, 2 Auth PASS, browser/E2E/build PASS.
- **Browser stress:** 100 конкурентных раундов, 200/200 сообщений сохранены и доставлены; подтверждены no-Web-Locks fallback, tab reopen и полный browser-context restart.
- **Post-merge CI #45182788336:** PASS на merge commit.
- **CI #45182857956:** PASS после PR #164.
- **GitHub Pages #45182857974:** build и deploy PASS после PR #164.
- **CI #45195181299:** PASS на main SHA `bbbb9a3569416baf0c917c95f28a05ad595b4c9d`.
- **GitHub Pages #45195181874:** build и deploy PASS на том же SHA.
- **RC checklist:** создан [docs/RELEASE_CANDIDATE_CHECKLIST.md](docs/RELEASE_CANDIDATE_CHECKLIST.md); ручные и staging-gates пока NOT TESTED.
- **RC runbooks (24.11):** добавлены подробные инструкции для offline/reconnect/multi-tab/account switching (RC-P07–P10), responsive/keyboard/screen reader (RC-P11–P13) и staging-only legacy registration/profile recovery (RC-S03). Это документация процедуры, а не подтверждение прохождения тестов; все соответствующие статусы остаются NOT TESTED.
- **Security source review (24.11):** выполнен read-only просмотр firestore.rules, storage.rules, firebase.json и .env.example; ключевые ограничения доступа зафиксированы в [docs/FIREBASE_SECURITY_REVIEW.md](docs/FIREBASE_SECURITY_REVIEW.md). Production Rules, legacy-данные и Storage lifecycle не подтверждены; security gate остаётся NOT TESTED/BLOCKED до owner read-only comparison и отдельного staging.
- **Security regression coverage (24.11):** добавлены Emulator tests на owner-only private profile, public profile field allowlist и ownership/immutability username claim. Тесты ожидают CI; это не production/staging acceptance.
- **Group/channel revocation tests (24.11):** добавлены Emulator cases на немедленный отзыв доступа после исключения из группы/отписки от канала, запрет чтения старых сообщений и новых записей бывшим участником, а также защиту ownerId и subscriberCount. Ожидают CI; Production/staging gates не закрыты.
- **RC-S07:** в RELEASE_CANDIDATE_CHECKLIST.md добавлен отдельный staging acceptance для ролей групп/каналов, защиты владельца, атомарности подписчиков и немедленного отзыва доступа после исключения/отписки. Статус NOT TESTED.
- **Storage negative regression (24.11):** добавлены Emulator tests на отказ пустых объектов и небезопасных object ID. MIME allowlist/active-content покрыты отдельным тестом; malformed MIME fixtures удалены, поскольку SDK нормализует часть значений. Первый прогон выявил нестабильный fixture, он скорректирован; Quality CI #45354538194 завершился PASS. CORS и Storage Production gate остаются NOT TESTED/BLOCKED.
- **RC-S08:** добавлен staging-only Storage attachment lifecycle gate: upload/read/delete, CORS, MIME/size, access revocation, orphan cleanup и legacy token URL inventory. Production Storage остаётся выключенным; статус NOT TESTED.
- **Attachment recovery (RC-S09):** добавлен staging/Emulator acceptance для quota, permission-denied, network interruption, uncertain Firestore commit, ограниченного retry, partial batch и cleanup queue. Добавлена отдельная quota error copy; quota-exceeded блокирует автоматический повтор. Статус NOT TESTED.
- **Attachment validation/retry fix (24.11):** локальные ошибки размера/MIME/формата помечаются invalid-argument; автоматический retry разрешён только для явно известных временных ошибок, неизвестные и uncertain-commit ошибки требуют ручной проверки. FileReader failure классифицирован отдельно. Добавлены регрессионные unit tests.
- **Quality CI (24.11):** прогон #45352444131 выявил одну регистрозависимую проверку в attachmentErrors; исправлено в PR #165 коммитом `31376cb`. Финальный PR run #45354538194 — PASS: unit, browser, Firebase Rules, auth, chat E2E и build.
- **PR #165:** MERGED в `main` (squash), merge commit `2c16a7f`. Исправления retry policy и RC-документации теперь в основной ветке.
- **PR #166:** MERGED в `main` (squash), merge commit `82559b6`. Добавлена test-only диагностика регистрации: при повторном сбое E2E отчёт сохранит исходную ошибку Auth и результат записи профиля. Production auth/profile logic и Firebase Rules не менялись.
- **Quality PR #166:** [run #45356599939](https://github.com/DoctorStrangeSH/Vortex/actions/runs/45356599939) — PASS по всем шагам: unit, browser, Rules, Auth, двухаккаунтный Chat E2E и build. Предыдущий сбой регистрации не воспроизвёлся.
- **Post-merge main verification:** Quality [#45357132903](https://github.com/DoctorStrangeSH/Vortex/actions/runs/45357132903) — PASS; unit, browser, Rules, Auth, Chat E2E и build прошли на SHA `82559b68cd0fa2723d2ad65486a33e777a317465`. GitHub Pages [#45357132913](https://github.com/DoctorStrangeSH/Vortex/actions/runs/45357132913) — build и deploy PASS на том же SHA.
- **Branch cleanup audit (24.11):** 158 refs классифицированы в [docs/BRANCH_CLEANUP_AUDIT.md](docs/BRANCH_CLEANUP_AUDIT.md): 139 refs merged PR, 13 refs закрытых без merge PR, 4 refs без PR, плюс `main`/`gh-pages`. Выделены 14 подтверждённых кандидатов из 17 неоднозначных refs и 3 архивные Spark-blocked callable refs; для 139 merged refs требуется head-SHA check. Автоудаление новых merged head branches подтверждено на PR #166/#167. Исторические refs не удалялись: текущий GitHub connector не предоставляет delete-ref action.

## Следующие задачи — без расширения scope

**Контроль:** все ручные результаты заносить в [RC checklist](docs/RELEASE_CANDIDATE_CHECKLIST.md) со статусом PASS / FAIL / BLOCKED / NOT TESTED; ничего не считать пройденным без наблюдения.
1. Ручная smoke-проверка на двух независимых аккаунтах в специально созданных временных тестовых чатах.
2. Проверка offline → reconnect, повторного открытия вкладки, переключения аккаунтов и legacy queue migration.
3. Ручная проверка legacy registration/profile recovery.
4. Accessibility приёмка: мобильные размеры, клавиатура, screen reader.
5. Финальная сверка Production Rules и RC checklist.
6. После приёмки — релиз 1.0; новые функции переносить в backlog 1.1.

## Известные ограничения
- Обычные сообщения не имеют E2EE — не использовать для чувствительной переписки.
- Firebase Storage выключен до отдельной staging-проверки.
- Серверные push, MFA, звонки и E2EE исключены из 1.0.
- Production ручная проверка разрешена только в изолированных временных тестовых чатах, без чувствительных данных и без destructive actions.
- Исторические ветки классифицированы в [docs/BRANCH_CLEANUP_AUDIT.md](docs/BRANCH_CLEANUP_AUDIT.md). Автоудаление новых head branches после merge включено и проверено; старые refs ещё не удалялись, поскольку доступный GitHub connector не предоставляет операцию удаления refs.

## Definition of Done
Vortex 1.0 закрывается только после выполнения P0, проверки оставленных P1, отсутствия критических/высоких security-дефектов, прохождения staging/ручной двухаккаунтной матрицы, доступности на мобильном и desktop, воспроизводимого CI/build и явного принятия Release Candidate владельцем.
