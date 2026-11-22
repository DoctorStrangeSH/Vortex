# Vortex — Roadmap

> Краткая операционная сводка. Полные требования, acceptance criteria и границы scope находятся в [PROJECT_SPEC.md](docs/PROJECT_SPEC.md). При расхождении приоритет всегда у PROJECT_SPEC.

**Версия:** 1.0  
**Последняя актуализация:** 22.11.2026  
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

## Ближайшие задачи

1. Проверить полный жизненный цикл сообщения на двух staging аккаунтах.
2. Закрыть оставшиеся приватность, legacy-account и rollback gates.
3. Провести ручную адаптивную и accessibility приёмку.
4. Подготовить RC checklist и получить подтверждение владельца.

## Состояние релиза

**Vortex 1.0 пока не готов к объявлению.** Отправка сообщений восстановлена в Production после синхронизации Firestore Rules, но полноценная staging/двухаккаунтная приёмка ещё не завершена.
