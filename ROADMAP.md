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

## Текущий статус — 23.11.2026

- **PR #151:** объединён в `main` (squash commit `aaa0ba5aec01f00a1ddfd1f750b5363437c3c442`). Quality checks run #813 успешно прошёл на точном head `a564ea9fad5c686c31b2e1cbde24821b7f911d70`: `npm ci`, unit, Chromium browser, Firestore/Storage Rules Emulator, Auth Emulator и production build. Тестовая фикстура создаёт валидный owner document до негативных попыток записи, поэтому отказы проверяют запрещённые поля, а не отсутствующую зависимость.
- **Staging:** по решению владельца отложен; отдельный Firebase-проект пока не создаём. `docs/STAGING_ACCEPTANCE.md` сохранён как будущий изолированный тестовый план, все сценарии NOT RUN.
- **Production acceptance:** добавлен `docs/PRODUCTION_ACCEPTANCE.md` для безопасной проверки с коллегами в текущем `vortex-messenger-4ea97`. Все сценарии NOT RUN до фактического подтверждения; рабочие переписки и пользовательские данные не использовать для тестов.
- **Границы безопасности:** production Firebase, тариф, Storage enablement и пользовательские данные не менялись.
- **ТЗ / Production:** `docs/PROJECT_SPEC.md` уточнён: ограниченная ручная smoke-приёмка с коллегами в отдельных тестовых чатах разрешена по решению владельца; автоматические/нагрузочные тесты, проверки чужих приватных данных, миграции и изменения Production Rules по-прежнему запрещены без staging и отдельного плана.
- **Ветки:** инвентаризация GitHub API показала 157 refs (155 не-default, плюс `main` и `gh-pages`), открытых PR нет. `main` не защищён и не требует Quality CI. Добавлен `docs/BRANCH_AUDIT.md`; ветки не удалялись, так как их уникальные коммиты ещё не классифицированы.
- **Следующий шаг:** продолжить ограниченную Production acceptance по `docs/PRODUCTION_ACCEPTANCE.md`; отдельно провести сравнение исторических веток с `main` и подготовить доказательный список кандидатов на удаление. Включить protection/required Quality checks для `main` вручную в GitHub Settings — текущий GitHub connector не предоставляет операцию изменения branch protection. До завершения приёмки RC gate остаётся открытым.

