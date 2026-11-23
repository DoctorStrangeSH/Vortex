# Vortex — Roadmap

> Краткая операционная сводка. Полные требования, acceptance criteria и границы scope находятся в [PROJECT_SPEC.md](docs/PROJECT_SPEC.md). При расхождении приоритет всегда у PROJECT_SPEC.

**Версия:** 1.0  
**Последняя актуализация:** 23.11.2026  
**Релиз:** не объявлен — RC gates открыты.

## Принципы

- Не расширять scope Vortex 1.0 новыми функциями.
- Не менять Production Firebase, тариф или данные автоматически.
- CI/Emulator PASS не заменяет staging и ручную двухаккаунтную приёмку.
- Не заявлять E2EE, серверные push или включённый Storage: они не входят в текущую подтверждённую конфигурацию.

## Этапы

| Этап | Состояние | Следующий критерий выхода |
|---|---|---|
| Scope freeze | В работе | Завершить инвентаризацию исторических refs и закрыть устаревшие ветки |
| Безопасность и регистрация | Реализация/Emulator tests в main; Production Firestore Rules синхронизированы владельцем | Staging, legacy accounts, приватные поля, rollback |
| Личная переписка | Отправка текста работает в Production по подтверждению владельца; offline queue и message lifecycle покрыты автоматическими тестами | Два независимых staging аккаунта: realtime, edit/delete, read receipts, offline recovery |
| Группы и каналы | Spark-совместимая реализация и Emulator coverage | Двухаккаунтная staging-приёмка ролей, членства и каналов |
| Интерфейс и доступность | Obsidian Iris; адаптивные и браузерные регрессии в CI | Полная ручная мобильная, keyboard и screen-reader проверка |
| Release Candidate | Не начат | Все P0 и выбранные P1 acceptance criteria пройдены |
| Выпуск 1.0 | Не начат | Релизный тег, публикация и smoke test после деплоя |

## Недавние завершённые работы

- **PR #138:** production-shaped Firestore regression для атомарного создания сообщения и обновления preview.
- **PR #139:** закрытие Production send incident в документации; причина — рассинхронизация опубликованных Rules и репозитория.
- **PR #140:** актуализация статуса требований и release gates.
- **PR #141:** Chromium browser tests реального MessageInput — Enter, IME и Escape.
- **PR #142:** Chromium browser tests реального MessageBubble — текст, edited/pinned, reaction, double-click и keyboard context menu.
- **PR #143:** оформление README, единый статус Firebase Security Review и отдельный roadmap.
- **PR #144:** освобождение Presence/Typing subscriptions при переключении чатов и защита от запоздавших callbacks.
- **PR #145:** Chromium stress test виртуализированного списка на 10 000 сообщений; менее 50 строк в DOM при навигации, prepend, mobile и keyboard сценариях.
- **PR #147:** Firestore Emulator test конкурентных retry одного стабильного message ID из двух независимых сессий одного UID; создаётся одна запись и согласованный preview.
- **PR #149:** Firestore Emulator test конкурентной отправки двух разных message ID из двух сессий; обе записи сохраняются, preview ссылается на существующее сообщение и согласован с его текстом и server timestamp.
- **PR #151:** Firestore Emulator privacy regression для legacy private profiles, email-bearing username claims и запрета private/unknown полей в public profile; Quality checks #813 прошёл на точном PR head, PR объединён в main.

## Ближайшие задачи

1. Провести staging-проверку жизненного цикла сообщений на двух независимых аккаунтах.
2. Проверить конкурентные отправки с разными message ID на staging и определить ожидаемую семантику preview по server timestamp.
3. Проверить синхронизацию очереди при нескольких вкладках и восстановление после перезапуска браузера на реальном Firebase staging.
4. Закрыть privacy, legacy-account и rollback gates.
5. Провести ручную адаптивную и accessibility приёмку.
6. Подготовить RC checklist и получить подтверждение владельца.

## Производительность истории

- **Автоматизировано:** Chromium virtual-feed fixture на 10 000 сообщений; проверяется ограниченный DOM (<50 mounted rows), историческая навигация, prepend старой страницы, late media resize, unread marker, keyboard/mobile scroll и переключение чатов.
- **Ограничение:** это browser regression на синтетических данных, не замер Firestore latency, не нагрузочный тест сети и не доказательство производительности на реальном аккаунте. Virtual feed остаётся opt-in до staging и ручной приёмки.

## Состояние релиза

**Vortex 1.0 пока не готов к объявлению.** Отправка сообщений восстановлена в Production после синхронизации Firestore Rules, но полноценная staging/двухаккаунтная приёмка ещё не завершена.

### Дополнение — PR #152, concurrent Offline Queue tabs (23.11.2026)

- PR #152 успешно объединён в `main` squash-коммитом `6320e89113cb61973930ac1eef10c5724a89cbd0`.
- Финальный PR head `8ee2f49eb11704df112d736fd382d0b4885f6011` прошёл полный Quality CI #45132563704: `npm ci`, unit tests, Chromium browser tests, Firestore/Storage Rules Emulator, Auth Emulator и production build.
- Добавлен Chromium regression: две вкладки одного UID одновременно записывают разные сообщения в общую Offline Queue; проверяется сохранность обеих записей, видимость durable queue и exactly-once delivery после reconnect.
- Изменены только browser test fixture и smoke test; runtime-код и Firebase Production не затрагивались.
- PR закрыт и merged. Cleanup веток остаётся отложенным по решению владельца.

### Дополнение — PR #153, read receipt UI regression (23.11.2026)

- PR #153 успешно объединён в `main` squash-коммитом `4826bd2a6673eb966483df4c8acf3d4661c6bd57`.
- Quality CI #838 прошёл на точном PR head `f9b2f8d0578c2f84cdaa69461d0539637798930f`: `npm ci`, unit tests, Chromium browser tests, Firestore/Storage Rules Emulator, Auth Emulator и production build.
- Chromium проверяет настоящий `MessageBubble` в состояниях «отправлено», частично прочитано в группе (`1/2`) и прочитано всеми; проверяются accessible labels.
- Изменены только browser test fixture и smoke test; runtime-код, Firestore Rules и Firebase Production не затронуты.
- Проверка UI не заменяет ручную проверку realtime read receipts между двумя независимыми Production-сессиями; PROD-DM-04 остаётся NOT RUN до подтверждения владельцем/коллегой.

## Текущий статус — 23.11.2026

- **PR #151:** объединён в `main` (squash commit `aaa0ba5aec01f00a1ddfd1f750b5363437c3c442`). Quality checks run #813 успешно прошёл на точном head `a564ea9fad5c686c31b2e1cbde24821b7f911d70`: `npm ci`, unit, Chromium browser, Firestore/Storage Rules Emulator, Auth Emulator и production build. Тестовая фикстура создаёт валидный owner document до негативных попыток записи, поэтому отказы проверяют запрещённые поля, а не отсутствующую зависимость.
- **Staging:** по решению владельца отложен; отдельный Firebase-проект пока не создаём. `docs/STAGING_ACCEPTANCE.md` сохранён как будущий изолированный тестовый план, все сценарии NOT RUN.
- **Production acceptance:** добавлен `docs/PRODUCTION_ACCEPTANCE.md` для безопасной проверки с коллегами в текущем `vortex-messenger-4ea97`. Все сценарии NOT RUN до фактического подтверждения; рабочие переписки и пользовательские данные не использовать для тестов.
- **Границы безопасности:** production Firebase, тариф, Storage enablement и пользовательские данные не менялись.
- **ТЗ / Production:** `docs/PROJECT_SPEC.md` уточнён: ограниченная ручная smoke-приёмка с коллегами в отдельных тестовых чатах разрешена по решению владельца; автоматические/нагрузочные тесты, проверки чужих приватных данных, миграции и изменения Production Rules по-прежнему запрещены без staging и отдельного плана.
- **Ветки:** из 155 не-default refs 139 точно совпадают по SHA с head merged PR; для них подготовлены `docs/branch-cleanup-manifest.json` и SHA-guarded `scripts/cleanup-merged-branches.ps1`. Ещё 16 веток требуют отдельного решения. `main` и `gh-pages` исключены. Удаление ещё не запускалось: коннектор не предоставляет delete-ref, скрипт рассчитан на однократный запуск в локальном clone. Детали — `docs/BRANCH_AUDIT.md`.
- **CI:** Quality checks и GitHub Pages deployment прошли успешно на `main` SHA `1751c3e22032daf0b310c9ab8874ca3e56992051`.
- **PR #153:** объединён в `main` (squash `4826bd2a6673eb966483df4c8acf3d4661c6bd57`); Quality CI #838 прошёл на точном PR head `f9b2f8d0578c2f84cdaa69461d0539637798930f` по всем этапам. Добавлены Chromium assertions для sent/partial-read/read-all UI и accessible labels. Реальные двухаккаунтные read receipts остаются ручным production acceptance gate.
- **PR #152:** объединён в `main` (squash `6320e89113cb61973930ac1eef10c5724a89cbd0`). Quality checks #45132563704 прошёл на точном PR head `8ee2f49eb11704df112d736fd382d0b4885f6011`: npm ci, unit, Chromium browser, Rules Emulator, Auth Emulator и build. Добавлен сценарий конкурентной записи в Offline Queue из двух вкладок одного UID и exactly-once delivery после reconnect.
- **Очистка refs:** отложена по решению владельца; 139 merged refs manifest/script сохранены, ничего не удалять до отдельного запроса. Automatically delete head branches включён владельцем для будущих PR.
- **Следующий шаг:** продолжить оставшиеся проверки Vortex 1.0 по `docs/PROJECT_SPEC.md` и `docs/PRODUCTION_ACCEPTANCE.md`; отдельно настроить protection/required Quality checks для `main` вручную в GitHub Settings. RC gate остаётся открытым.



### Дополнение — PR #154, уникальность read receipts (23.11.2026)

- PR #154 объединён в `main` squash-коммитом `f647e8ac9f8e1cbc9c568062de71027280dc8c67`.
- Quality checks #45134260984 полностью прошёл на точном PR head `60ef6efe25e19bbeea04efc490705e7c3894fe98`: `npm ci`, unit tests, Chromium browser tests, Firestore/Storage Rules Emulator, Auth Emulator и production build.
- Firestore Rules теперь требуют уникальности UID в `readBy` после добавления читателя; добавлен негативный Rules Emulator test на дублирующий UID.
- Production Rules не публиковались; Firebase Production и пользовательские данные не менялись.


### Дополнение — main verification after PR #154 (23.11.2026)

- PR #154 merged successfully; full Quality CI #45134260984 passed on exact PR head `60ef6efe25e19bbeea04efc490705e7c3894fe98`.
- Documentation-only follow-up is on `main` SHA `4edb87f09e3111801f6f8d1ec4684609f505cb4e`; Quality checks #45134623882 and GitHub Pages deployment #45134623777 both completed successfully.
- No open PRs remain. `main` is still reported as unprotected; branch protection/required checks must be configured in GitHub Settings by a repository admin.
- Scope Freeze remains open by explicit owner decision: the 139 merged-PR branch cleanup candidates are prepared but not deleted; the 16 historical refs remain preserved for now.


### Дополнение — PR #155 и авторизованный ChatScreen E2E (23.11.2026)

- PR #155 объединён в `main` squash-коммитом `7150ce23f92d7a3b05190390ad61160fdbdc2d24`; полный PR Quality CI #45137389471 прошёл на точном head `5fc56b0defbc849589b2f34ce2b2cedbc3240612` (unit, browser, Rules Emulator, Auth Emulator, build).
- Добавлена реальная browser regression coverage для `ChatHeader`: 320/360/375/390/768/769/1024/1440 CSS px, mobile group menu, keyboard navigation, Escape focus restoration и action handlers.
- После merge новый Quality CI на `main` (#45137847388) упал в browser regression test конкурентного enqueue Offline Queue: после двух параллельных вызовов из двух вкладок durable `localStorage` содержал только запись вкладки A. Это подтверждённый сбой сценария теста; первопричина ещё не установлена, поэтому пока нельзя утверждать, что в production уже доказана потеря реальных сообщений. Проверку не отключаем и не ослабляем; требуется воспроизвести и локализовать причину.
- PR #156 открыт: добавляет opt-in Firebase Emulator wiring, ограниченный explicit demo staging config и настоящий `App`/ `ChatScreen` E2E с двумя независимыми Chromium Auth sessions. Сценарий проверяет регистрацию, поиск пользователя, создание DM, двусторонний realtime обмен, mobile sidebar/chat/back, breakpoint resize и account switch. Production Firebase не используется.
- В PR #156 также добавлена диагностика lock acquisition в offline browser fixture. После одного невоспроизведённого повторно сбоя конкурентного enqueue следующий полный Quality CI #45139550262 на head `a1449c1dafd47a4c0f470805768839af239f23e2` завершился PASS: browser suite (включая concurrent same-account enqueue), Rules, Auth, authenticated two-user ChatScreen E2E и production build. Это подтверждает прохождение regression-сценария в повторном запуске, но не устанавливает первопричину единичного сбоя и не доказывает наличие production data loss. PR #156 допускается к merge при условии, что его head и успешный CI остаются актуальными.
- `docs/PRODUCTION_ACCEPTANCE.md` остаётся отдельной ручной матрицей: Emulator E2E не переводит реальные Production сценарии из NOT RUN в PASS.


### Обновление диагностики PR #156 (23.11.2026)

- Первый запуск authenticated ChatScreen E2E (#45138605160) дошёл до реальной формы регистрации, но остановился из-за неоднозначного Playwright locator `getByLabel('Пароль')`: он совпадал с input и кнопкой показа пароля. Приложение и Firebase Emulator на этом шаге не были причиной сбоя.
- Селектор исправлен на точный существующий input ID `#vortex-auth-password` для регистрации и входа (commit `0efa53165d679901b615a7d4e94e378d928098d3`). Повторный Quality CI #45139179562 запущен; на последней проверке job находился на `npm ci`, итог ещё не получен.
- В Offline Queue browser fixture добавлена трассировка входа/выхода из Web Lock и снимок durable storage для следующего воспроизведения; диагностический код не меняет production-логику очереди.
- До получения логов повторного browser test не менять реализацию OfflineService наугад. PR #156 остаётся открытым и не готов к merge.

- Повторный запуск #45139179562 после исправления password locator прошёл unit, browser (включая Offline Queue concurrency), Firestore/Storage Rules и Auth Emulator. Новый E2E дошёл до обмена сообщениями, затем остановился на неоднозначном `getByText`: текст сообщения одновременно отображается в bubble и Sidebar preview. Исправлено скоупированием проверки на `.vortex-message-text` (commit `4e338307352807ae13ea6243af7e57495702bb8f`). Ожидается следующий полный CI.


### Итог PR #156 — authenticated ChatScreen E2E (23.11.2026)

- PR #156 объединён в `main` squash-коммитом `19add018db14a32d250a9f28fa3ef38b7b5f115f`.
- Полный Quality CI #45139952610 завершился PASS на точном PR head `1e946051ba53a6ec5d1751c60f3eac8359def8d8`: dependency install, unit tests, browser smoke (включая Offline Queue concurrency), Firestore/Storage Rules Emulator, Auth Emulator, authenticated two-user ChatScreen E2E и production build.
- E2E проходит через настоящий `App` и две независимые Chromium/Auth сессии: регистрация, поиск по username, создание DM, двусторонняя realtime доставка сообщений, mobile sidebar/chat/back, breakpoint transitions и logout/login с проверкой сброса выбранного чата.
- Firebase Emulator wiring включается только при явных `VITE_USE_FIREBASE_EMULATORS=true`, `VITE_APP_ENV=staging` и demo project ID; Production defaults не менялись. Production Firebase, реальные аккаунты и пользовательские данные не затрагивались.
- Ранее зафиксированный единичный сбой concurrent Offline Queue не воспроизвёлся на последующих полных прогонах #45139550262 и #45139952610. Первопричина не установлена; это не доказательство production data loss. Регрессионный тест оставлен включённым.
- Исторические записи выше описывают состояние на момент соответствующих запусков. Текущий статус PR #156: MERGED; текущий main SHA: `19add018db14a32d250a9f28fa3ef38b7b5f115f`. CI на новом main push ещё выполняется; до его результата RC gate не закрывать.
- `docs/PRODUCTION_ACCEPTANCE.md` остаётся отдельной ручной приёмкой: emulator E2E не заменяет проверку двух реальных аккаунтов, уведомлений, read receipts и поведения на Production.


### Offline Queue cross-tab diagnostics — PR #158 (23.11.2026)

- PR #158 merged into `main` squash-коммитом `74d3a589816b426c7fe63182748054c53192098c`.
- Добавлен отдельный browser probe, который удерживает Web Lock во вкладке A и доказывает, что вкладка B не входит в ту же критическую секцию до освобождения lock.
- В lock trace добавлены tab ID и monotonic timestamp; существующая проверка двух параллельных enqueue и обязательное сохранение обеих записей не ослаблялись.
- Полный Quality CI #45140951017 завершился PASS на точном PR head `da1601e3c670f12e10d26573ff654b32d3491f5c`.
- Это подтверждает, что браузерный Web Locks API действительно сериализует межвкладочные запросы и что сценарий прошёл в данном запуске. Первопричина прежних intermittent failures остаётся неустановленной; production data loss не доказана. Не отключать тест и не закрывать RC gate.
- PR #157 остаётся открытым: его Quality CI #45140569986 повторно упал в concurrent Offline Queue assertion до запуска остальных gates. Responsive ChatScreen проверки из PR #157 пока не приняты.
- После merge #158 main: `74d3a589816b426c7fe63182748054c53192098c`. На момент обновления выполняются main Quality CI #45141872274 и GitHub Pages build #45141872494; их результаты ещё не получены.


### Responsive ChatScreen E2E rebased after Offline Queue diagnostics (23.11.2026)

- Main Quality CI #45141872274 и Pages build #45142022534 завершились PASS на `main` после PR #158; текущий код main и production build проверены.
- PR #157 закрыт как superseded: его head был основан на старом main, а CI остановился в Offline Queue browser test до выполнения новых responsive assertions.
- Те же responsive/authenticated ChatScreen проверки перенесены без ослабления на новую ветку от актуального main; открыт PR #159 (`01e4326a55bb520e21f6d0d6b368b29273064d53`).
- PR #159 использует обновлённую fixture из PR #158 с tab ID и monotonic lock trace; текущий Quality CI #45142850877 выполняется.
- Offline Queue: isolated Web Locks probe проходит, но intermittent concurrent enqueue failure пока не имеет установленной первопричины. Production data loss не доказана; тест оставлен строгим, RC gate открыт.


### Responsive ChatScreen: mobile overflow and keyboard focus regression — 23.11.2026

- PR #159 exposed a real 320px overflow: ChatWindow root and its header/composer flex children could retain intrinsic content width (369px). The branch now constrains the chat window, header flex content, and composer to available width; the latest E2E run passed the 320px geometry and long-message assertions before reaching keyboard navigation.
- The same E2E run then failed because the test sent ArrowDown immediately after menu visibility, before ChatHeader's post-render focus effect had moved focus into the first menu item. The test now waits for the active element to become a menu item before sending the key; no accessibility assertion was removed.
- New PR head `a9a34c9b843ef5b96ae401938e6060198a4cbd4a`; its Quality CI is pending at the time of this update. Do not merge until full Quality CI passes on this exact head.
- PR #159 remains open; production Firebase and deployed main are unchanged. Offline Queue investigation remains a separate open RC gate.


### Responsive ChatScreen — PR #159 merged (23.11.2026)

- PR #159 успешно объединён в `main` squash-коммитом `369381928b6c37ab5038eeaaaa1b876e78845c8b`.
- Quality CI #45150147297 завершился PASS на точном PR head `a9a34c9b843ef5b96ae401938e6060198a4cbd4a`.
- В main вошли исправления ширины ChatWindow, ChatHeader и MessageInput, а также authenticated E2E-проверки 320/375/390/768/769/1024/1440 px, длинных Unicode-сообщений, мобильного меню/фокуса, информации о чате, галереи, desktop header actions и message context menu.
- Новый main commit: `369381928b6c37ab5038eeaaaa1b876e78845c8b`. Post-merge Quality CI #45151865724 и Pages workflow #45151865667 выполняются; дождаться результатов.
- Offline Queue intermittent concurrent enqueue failure остаётся отдельным незакрытым RC gate; PR #159 его не затрагивал и не ослаблял.


### Offline Queue multi-tab stress regression — PR #160 (23.11.2026)

- PR #160 успешно объединён в `main` squash-коммитом `24f25d9c7b2aa933da58ba6959dcc08254763b99`.
- Полный Quality CI #45152851030 завершился PASS на точном PR head `1909155200f8484ecf7bd0cc33b8cedd527e1b2e`: `npm ci`, unit tests, Chromium browser tests, Firestore/Storage Rules Emulator, Auth Emulator, authenticated ChatScreen E2E и production build.
- Browser regression расширен до 8 синхронных race rounds между двумя вкладками одного UID: 16 сообщений должны оставаться durable в localStorage, быть видимыми из обеих вкладок и доставляться ровно один раз с уникальными ID после reconnect.
- Изменён только browser test fixture; runtime-код, Production Firebase, Rules и пользовательские данные не затрагивались.
- Это усиливает автоматическое покрытие конкурентной записи, но не закрывает ручной staging/Production acceptance и не доказывает поведение после перезапуска браузера. RC gate остаётся открытым.


### Accessibility keyboard regression — PR #161 (23.11.2026)

- PR #161 открыт: `test/accessibility-chat-menu-keyboard`, head `6fc26ee805011f8102249e1824fee3ce4748aee5`.
- Mobile ChatHeader overflow trigger announces `aria-haspopup="menu"`; Chromium checks keyboard activation with Enter/Space, `aria-expanded`, initial menu focus, Escape close and focus restoration. Existing arrow-key, wraparound, pointer and desktop action checks remain.
- PR Quality CI #45154234026: npm ci and unit tests passed; browser suite is running. No merge until every gate passes.
- Main Quality CI #45153549337 failed in the pre-existing Offline Queue browser concurrency regression before Rules/Auth/E2E/build gates. Failure: round 4 did not persist both concurrent enqueue operations; durable queue contained 7 rather than expected 8 entries, while lock diagnostics showed no held/pending locks at capture. The root cause is still unresolved; do not weaken the assertion or merge a PR whose full browser suite fails.
- This failure is unrelated to the accessibility changes but blocks the shared Quality pipeline and RC. Production Firebase and user data were not touched.


### CI diagnosis correction — PR #161 retry (23.11.2026)

- PR CI #45154234026 did **not** fail in Offline Queue: its browser log shows the two-account delivery, 8-round/16-message concurrent stress, no-Web-Locks fallback, browser restart recovery and tab close/reopen recovery all passed.
- That PR run failed later in `chat-header.smoke.mjs`: the second Escape assertion ran immediately after Space opened the menu, before the menu focus-management effect had attached its document Escape listener. This was a browser-test timing race, not evidence of a production menu regression.
- PR branch was updated at `e478463ff74bf5e8bbfb371295b5dbf26ee96b1c` to wait for the first menu item to receive focus before pressing Escape. New PR Quality CI #45154820637 is running; result not yet confirmed.
- Separately, main Quality CI #45154489033 did fail in Offline Queue round 4 (7 durable messages instead of 8). The issue remains intermittent and unresolved; the successful PR run does not close this blocker.


### Accessibility PR #161 validation update — 23.11.2026

- [x] PR CI retry #45154820637: dependency install PASS, unit tests PASS, complete browser suite PASS (including keyboard menu activation after focus synchronization).
- [ ] Firestore/Storage Rules Emulator currently running; Auth Emulator, authenticated ChatScreen E2E and production build have not yet completed.
- [ ] PR remains open and unmerged pending full Quality CI.
- [ ] Manual keyboard-only and screen-reader acceptance remain NOT RUN.


### ChatScreen authenticated E2E follow-up — PR #161 (23.11.2026)

- [x] PR Quality CI #45154820637 passed unit tests, complete browser suite, Firestore/Storage Rules Emulator and Auth Emulator.
- [x] The same run reached authenticated ChatScreen E2E and failed at message context-menu Escape dismissal. Log shows the menu mounted, but the test sent Escape before the ContextMenu focus effect had focused its first menu item; the component handles Escape from its focused menu subtree.
- [x] Added an explicit browser wait for the active element to be a menuitem inside the message context menu before pressing Escape. Test-only change in `tests/browser/chat-screen-emulator.smoke.mjs`; no runtime, Firebase or production changes.
- [ ] New full Quality CI for head `df00b1c4b85425cd1df53cc6bed50b7cb4784ade` is pending/awaiting GitHub Actions start; not yet validated.
- [ ] Production build and final PR merge remain blocked until full CI PASS.


### PR #161 CI rerun — Offline Queue regression confirmed again (23.11.2026)

- Quality CI #45155345677 on PR head `df00b1c4b85425cd1df53cc6bed50b7cb4784ade`: `npm ci` PASS, unit tests PASS, browser suite FAIL; Rules/Auth/Chat E2E/build were skipped.
- Failure is again in same-account two-tab Offline Queue stress, now round 8: expected 16 durable records, observed 15. The durable snapshot includes round 8 from tab B but not the matching enqueue from tab A.
- The fixture's independent cross-tab Web Locks probe passed earlier in the same browser context, and both service instances report Web Locks support. Therefore the failure is not explained by missing Web Locks support. Available CI log is truncated during the second diagnostic snapshot, so it does not yet prove whether the missing entry was never written or overwritten afterward.
- Do not change the expected count, weaken the assertion, or merge PR #161 while this shared browser suite fails. Next investigation should add compact per-operation trace records (tab, message text/ID, lock entry/exit, storage value before/after) and isolate addToQueue writes from unrelated queue processing/storage-event refreshes.
- No production Firebase, Rules, or user data were changed.


### Offline Queue diagnostic instrumentation — PR #161 follow-up (23.11.2026)

- [x] Replaced oversized per-lock snapshots in the browser fixture with compact per-tab operation traces: lock acquired/released, queue count, last message text, localStorage write start/success/error.
- [x] CI failure diagnostics now report bounded durable message summaries and recent trace events rather than full serialized queue payloads, preventing GitHub log truncation from hiding the root cause.
- [ ] No production OfflineService behavior changed in this diagnostic commit. Await a new full CI run before deciding on a runtime fix.


### Accessibility keyboard menu + bounded Offline Queue diagnostics — PR #161 merged (23.11.2026)

- [x] PR #161 passed full Quality CI #45156725643 on exact head `7065de8b744d49541ebb052739f17a28d28f6a2b`: npm ci, unit tests, Chromium browser suite, Firestore/Storage Rules Emulator, Auth Emulator, authenticated ChatScreen E2E and production build.
- [x] PR #161 squash-merged into `main` as `0ec1894f5fd1c28c20a74cfff367d827acc231ef`.
- [x] Mobile ChatHeader overflow trigger now exposes `aria-haspopup="menu"`; browser tests cover Enter/Space, `aria-expanded`, initial focus, Escape dismissal and focus restoration.
- [x] Offline Queue browser fixture now captures compact per-tab lock/storage operation traces and bounded failure snapshots. This is test-only instrumentation; production OfflineService behavior is unchanged.
- [ ] Post-merge Quality CI #45160451606 and companion workflow #45160451369 are queued on the merge commit; await results.
- [ ] Manual keyboard-only and screen-reader acceptance remain NOT RUN.
- [ ] Offline Queue concurrency root cause remains unresolved. The passing PR stress run does not erase prior intermittent main failures; continue investigating without relaxing the 16-message assertion.


### Chat dialog keyboard acceptance — PR #162 (23.11.2026)

- [x] Opened PR #162 from `test/a11y-chat-dialog-keyboard`, head `5361b13e5f81a52088bbf4c105698d6bfb5ebce9`.
- [x] Authenticated ChatScreen Chromium E2E now checks ChatInfoDialog and MediaGallery initial focus, forward/reverse Tab wrapping, Escape dismissal, and focus restoration to each opener.
- [x] Test-only change; no runtime component, Firebase, Rules, or production data modified.
- [ ] PR Quality CI #45160673459 is queued; no merge until full CI PASS.
- [ ] Manual keyboard-only and screen-reader acceptance remain NOT RUN.
- [ ] Post-merge checks after PR #161 are running again on the latest documentation commit; verify latest main Quality CI and Pages before release acceptance.
- [ ] Offline Queue concurrency root cause remains an open RC blocker despite successful PR #161 CI; retain all 16-message assertions and use compact trace instrumentation to diagnose any recurrence.


### Chat dialog keyboard E2E — PR #162 validation update (23.11.2026)

- [x] PR #162 authenticated ChatScreen E2E passed: real ChatInfoDialog and MediaGallery initial focus, forward/reverse Tab boundary, Escape dismissal, and opener focus restoration.
- [x] PR CI #45160673459: npm ci, unit tests, browser suite, Firestore/Storage Rules Emulator, Auth Emulator and authenticated ChatScreen E2E all PASS.
- [ ] Production build is currently running; do not merge until it completes successfully.
- [ ] Post-merge main Quality CI and Pages workflows from PR #161 documentation/merge commits have newer runs; verify final outcomes separately.
- [ ] Manual screen-reader and keyboard-only acceptance remain NOT RUN.
- [ ] Offline Queue concurrency root cause remains an open RC blocker; keep the 16-message assertion unchanged.


### Chat dialog keyboard accessibility — PR #162 merged (23.11.2026)

- [x] PR #162 passed full Quality CI #45160673459 on exact head `5361b13e5f81a52088bbf4c105698d6bfb5ebce9`: npm ci, unit tests, browser suite, Firestore/Storage Rules Emulator, Auth Emulator, authenticated ChatScreen E2E and production build.
- [x] Authenticated E2E verifies ChatInfoDialog and MediaGallery initial focus, forward/reverse Tab wrapping, Escape dismissal and focus restoration to their opener controls.
- [x] PR #162 squash-merged into `main` as `faac0fed3ead75ed47f66604f2bb31149dce0baa`.
- [ ] Post-merge Quality CI #45161006101 and Pages workflow #45161006117 are queued on the merge commit; await results.
- [ ] Automated Screen Reader/accessible-name audit and manual screen-reader acceptance remain NOT DONE. Current package has no axe-core/pa11y dependency; do not claim a screen-reader audit has passed.
- [ ] Offline Queue concurrent enqueue root cause remains an open RC blocker; do not relax the 16-message stress assertion.


### Offline Queue race — deeper per-operation diagnostics (23.11.2026)

- [x] CI failure confirmed in PR #163 browser suite: same-account concurrent enqueue round 5 leaves 9 durable messages instead of 10.
- [x] Both tab traces show successful `localStorage.setItem` calls based on a queue length of 8; each writes a 9-item snapshot, and one round-5 message is absent from the final durable queue.
- [x] Expanded the PR #163 browser fixture trace to capture enqueue start/completion/error, queue refresh before/after, processQueue start/finish, lock boundaries, and each durable write including message IDs.
- [ ] Root cause is NOT YET PROVEN. The new trace must establish whether stale in-memory state is introduced by queue processing/storage events or whether the browser lock callback boundaries are not serializing the actual mutations.
- [ ] Do not change production OfflineService until the expanded trace identifies the losing writer; do not relax the 16-message assertion.
- [ ] PR #163 remains unmerged; all Firebase/Production state untouched.
