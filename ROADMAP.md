# Vortex — Roadmap

> Краткая операционная сводка. Полные требования — в [PROJECT_SPEC.md](docs/PROJECT_SPEC.md), матрица проверки — в [RELEASE_CANDIDATE_CHECKLIST.md](docs/RELEASE_CANDIDATE_CHECKLIST.md), история — в [PROJECT_HISTORY.md](docs/PROJECT_HISTORY.md).

**Версия:** 1.0  
**Дата статуса:** 23.11.2026  
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
- **CI #45181260085:** полный Quality workflow прошёл на PR head: 296 unit PASS, 57 intentional skips, 55 Rules PASS, 2 Auth PASS, browser/E2E/build PASS.
- **Browser stress:** 100 конкурентных раундов, 200/200 сообщений сохранены и доставлены; подтверждены no-Web-Locks fallback, tab reopen и полный browser-context restart.
- **Post-merge CI #45182788336:** PASS на merge commit.
- **CI #45182857956:** PASS после PR #164.
- **GitHub Pages #45182857974:** build и deploy PASS после PR #164.
- **CI #45195181299:** PASS на main SHA `bbbb9a3569416baf0c917c95f28a05ad595b4c9d`.
- **GitHub Pages #45195181874:** build и deploy PASS на том же SHA.
- **RC checklist:** создан [docs/RELEASE_CANDIDATE_CHECKLIST.md](docs/RELEASE_CANDIDATE_CHECKLIST.md); ручные и staging-gates пока NOT TESTED.
- **PR:** открытых PR нет на момент проверки.

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
- Ветка main чистая по PR #164; исторические ветки требуют отдельной безопасной очистки. Текущий GitHub-инструмент не предоставляет удаление branch refs, поэтому ветки не удалялись.

## Definition of Done
Vortex 1.0 закрывается только после выполнения P0, проверки оставленных P1, отсутствия критических/высоких security-дефектов, прохождения staging/ручной двухаккаунтной матрицы, доступности на мобильном и desktop, воспроизводимого CI/build и явного принятия Release Candidate владельцем.
