# Vortex — аудит исторических веток

**Дата проверки:** 23.11.2026  
**Режим:** только чтение GitHub API; удаления и переписывания веток не было.  
**Основная ветка:** `main`; **открытых PR:** 0; **всего веток:** 158 (включая `main` и `gh-pages`).

## Принцип оценки

GitHub compare вызван как `base=<старая ветка>, head=main`. Поэтому `ahead` — число коммитов в `main`, отсутствующих в проверяемой ветке, а `behind` — число коммитов, уникальных для старой ветки. Статус `diverged` означает, что история разошлась. **Уникальные коммиты не доказывают уникальный полезный код** (например, squash merge меняет историю), но и не разрешают автоматически удалять ветку. Требуется отдельная проверка diff/PR ancestry.

## Проверенная выборка (12 из 158)

| Ветка | Compare | main ahead | Branch-only commits | Решение |
| --- | --- | ---: | ---: | --- |
| `docs/roadmap-10k-stress-test` | diverged | 100 | 1 | KEEP / review diff |
| `docs/roadmap-concurrent-send-pass` | diverged | 98 | 1 | KEEP / review diff |
| `docs/roadmap-concurrent-send-pass-v2` | diverged | 97 | 2 | KEEP / review diff |
| `test/offline-queue-browser-process-restart` | diverged | 179 | 2 | KEEP / review diff |
| `test/offline-queue-browser-process-restart-v2` | diverged | 178 | 2 | KEEP / review diff |
| `test/offline-queue-no-web-locks-2026-11-20` | diverged | 184 | 4 | KEEP / review diff |
| `chore/repository-hygiene-audit-2026-11-20` | diverged | 196 | 3 | KEEP / review diff |
| `chore/repository-readme-roadmap-cleanup` | diverged | 103 | 3 | KEEP / review diff |
| `docs/update-vortex-a11y-progress-final` | diverged | 136 | 1 | KEEP / review diff |
| `fix/offline-queue-local-storage-warning` | diverged | 179 | 1 | KEEP / review diff |
| `feat/client-group-membership-callables-main` | diverged | 227 | 11 | KEEP / review diff; Spark compatibility |
| `refactor/messaging-foundation` | diverged | 258 | 164 | KEEP / deep review |

## Дальнейшие действия

1. **Не удалять** `main` и `gh-pages`.
2. Для каждой исторической ветки найти закрытый/объединённый PR, сравнить **содержимое** изменений после squash merge, проверить, не осталось ли полезных несмерженных исправлений.
3. При наличии уникальных полезных изменений создать отдельную задачу или точечный PR, а не сливать старую ветку целиком.
4. Для безопасных кандидатов записать Git ref, SHA, связанный PR, результат diff/ancestry и статус `READY_TO_DELETE`.
5. Удалять только после отдельной проверки кандидата доступным инструментом; текущее подключение GitHub не предоставляет операции удаления branch refs.

**Итог:** 12/158 веток проверены на уровень истории, 0 подтверждено к удалению, 0 удалено. Это инвентаризация, а не завершённая очистка.
