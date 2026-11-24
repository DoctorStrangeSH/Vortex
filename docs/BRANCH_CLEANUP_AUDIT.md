# Vortex — Branch Cleanup Audit

**Дата:** 24.11.2026  
**Основа:** `main` после PR #167, commit `1052ff543ad44e85a60976ea0131394be160aa86`.

## Итог инвентаризации

На момент проверки в репозитории было 158 branch refs:

| Категория | Количество | Решение |
| --- | ---: | --- |
| Ветки с merged PR | 139 | Кандидаты на удаление после проверки текущего head SHA |
| Ветки закрытых PR без merge | 13 | 11 кандидатов на удаление; 2 архивные ветки Spark-blocked callables |
| Ветки без найденного PR | 4 | 3 кандидата на удаление; 1 архивная ветка callables |
| Защищённые refs | 2 | `main` и `gh-pages` — не удалять |
| **Всего** | **158** | |

Автоматическое удаление head branch после merge включено и подтверждено: ветки PR #166 и #167 исчезли после merge. Это правило работает для будущих merged PR, но не очищает исторические refs автоматически.

## 1. Закрытые PR без merge

### Кандидаты на удаление после проверки head SHA

| Ветка | PR | Основание |
| --- | ---: | --- |
| `chore/repository-hygiene-audit-2026-11-20` | #63 | Документация явно superseded PR #65 |
| `docs/audit-group-callables-spark-blocker-2026-11-20` | #69 | Документация объединена в PR #71 |
| `docs/audit-offline-queue-2026-11-20` | #70 | Документация объединена в PR #71 |
| `docs/close-self-destruct-audit-2026-11-20` | #68 | Документация объединена в PR #71 |
| `docs/roadmap-concurrent-send-pass` | #148 | Только ROADMAP; полезная запись о merged PR #147 перенесена в актуальный ROADMAP |
| `docs/security-review-current-state` | #40 | Устаревшая версия security review; актуальный документ в main содержит последующие уточнения |
| `docs/update-vortex-a11y-progress` | #105 | Явно заменена PR #106 |
| `fix/virtual-feed-programmatic-scroll-state` | #52 | Изменение VirtualMessageList перенесено в merged PR #53 |
| `test/browser-responsive-dialogs` | #133 | Явно заменена PR #135 |
| `test/delegated-group-admin-removal-2026-11-21` | #87 | Тест delegated admin уже присутствует в main: `tests/firebaseRules.test.js` |
| `test/e2e-chat-composer-header-responsive` | #157 | Явно заменена PR #159 |

### Архивировать, не переносить в main

| Ветка | PR | Основание |
| --- | ---: | --- |
| `feat/client-group-membership-callables-main` | #32 | Callable Cloud Functions требуют отдельного инфраструктурного решения; текущая граница — Firebase Spark. Не включать и не развёртывать |
| `feat/client-group-membership-callables-v2` | #31 | Та же заблокированная callable-интеграция; не включать и не развёртывать |

Коммиты этих PR остаются доступными через историю закрытых PR. Их ветки не являются частью текущего scope 1.0.

## 2. Ветки без найденного PR

### Кандидаты на удаление после проверки head SHA

| Ветка | Основание |
| --- | --- |
| `fix/auth-tabs-keyboard-accessibility` | Проверенные AuthScreen.jsx и authTabs.js совпадают с main по blob SHA |
| `security/restrict-client-group-deletion` | Запрет удаления group documents и соответствующий Emulator test присутствуют в main |
| `test/offline-queue-browser-process-restart` | Сценарий полного browser process restart уже присутствует в актуальном browser smoke suite; ветка содержит более раннюю версию |

### Архивировать

| Ветка | Основание |
| --- | --- |
| `feat/client-group-membership-callables` | Не имеет связанного PR; содержит ещё одну версию callable prototype. Spark blocker остаётся; не переносить в main |

## 3. Правила безопасной очистки

1. Не удалять `main` и `gh-pages`.
2. Для ветки с merged PR сверять текущий head SHA с head SHA merged PR. Если ветка продвинута после merge или используется другой работой — не удалять автоматически.
3. Закрытые без merge ветки удалять только из раздела «кандидаты» выше: замена/перенос изменений должны быть подтверждены в main.
4. Три callable-ветки оставить архивными до отдельного решения по инфраструктуре и тарифу; не объединять их и не развёртывать Cloud Functions.
5. После очистки повторно получить полный список refs и сверить количество.
6. Не менять Firebase Rules, Production данные, Firebase тариф, Storage или deployment в рамках branch cleanup.

## 4. Фактическое ограничение выполнения

В доступном GitHub-инструментарии этой сессии есть чтение refs, сравнение коммитов, создание/обновление refs и управление PR, но нет операции удаления branch refs. Поэтому этот аудит не удалял ветки. Автоудаление после merge уже работает; исторические ветки из таблиц требуют удаления через GitHub UI либо отдельный авторизованный GitHub workflow.

## 5. Следующий безопасный шаг

Удалить только подтверждённые кандидаты из таблиц, не трогая три архивные callable-ветки и защищённые refs. После удаления пересчитать refs и оставить этот документ как журнал решений.
