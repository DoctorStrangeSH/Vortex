# Vortex 1.0 — Release Candidate Acceptance Checklist

> **Статус:** RC NOT ACCEPTED · **Дата:** 23.11.2026  
> Единственный scope: [PROJECT_SPEC.md](PROJECT_SPEC.md). Операционный статус: [ROADMAP.md](../ROADMAP.md). Этот чек-лист разделяет факты CI, ручную проверку и решения владельца. Никакой пункт не закрывается «по умолчанию».

## A. Автоматические доказательства — выполнено

| ID | Проверка | Результат | Доказательство |
| --- | --- | --- | --- |
| AUTO-01 | Quality CI на актуальном main | **PASS** | [#45195181299](https://github.com/DoctorStrangeSH/Vortex/actions/runs/45195181299), SHA `bbbb9a3569416baf0c917c95f28a05ad595b4c9d` |
| AUTO-02 | GitHub Pages build/deploy на том же SHA | **PASS** | [#45195181874](https://github.com/DoctorStrangeSH/Vortex/actions/runs/45195181874) |
| AUTO-03 | Offline Queue, 100 раундов, два tab context | **PASS** | [#45181260085](https://github.com/DoctorStrangeSH/Vortex/actions/runs/45181260085): 200/200 persisted, 200/200 delivered |
| AUTO-04 | Восстановление после tab reopen и browser process restart; fallback без Web Locks | **PASS** | Browser logs #45181260085 |
| AUTO-05 | Firebase Rules Emulator, Auth Emulator, Chat E2E, production build | **PASS** | Quality workflow #45195181299 |
| AUTO-06 | Изменения Offline Queue в main | **MERGED** | [PR #164](https://github.com/DoctorStrangeSH/Vortex/pull/164), squash `a2936bd4f9224a2420c4527eca2f475d11284dcd` |

> Эти проверки не означают, что staging, реальные legacy accounts, production Security Rules и ручная доступность приняты.

## B. Разрешённая ручная smoke-проверка на текущем Production

**Граница безопасности:** только два добровольных тестовых аккаунта и специально созданные временные тестовые чаты; без чувствительных данных. Не выполнять нагрузочные тесты, миграции, чужие access-denial проверки, mass deletion, изменение Firebase Rules/тарифа/Storage. Для security-negative, destructive и migration test используйте Firebase Emulator/отдельный staging.

Для каждого сценария записывать **PASS / FAIL / BLOCKED / NOT TESTED**, браузер, устройство, дату, краткое наблюдение, ссылку на issue (если FAIL). По умолчанию все статусы **NOT TESTED**.

| ID | Сценарий | Что проверить | Статус |
| --- | --- | --- | --- |
| RC-P01 | Вход двух аккаунтов | A и B входят в независимых браузерных профилях, без перекрёстной сессии | NOT TESTED |
| RC-P02 | Личный чат | A создаёт тестовый диалог с B; B видит его; A/B отправляют по 1 обычному сообщению | NOT TESTED |
| RC-P03 | Realtime | Второй аккаунт получает сообщение без перезагрузки | NOT TESTED |
| RC-P04 | История и UI | После перезагрузки оба видят корректную историю и порядок; текст не вылезает за экран | NOT TESTED |
| RC-P05 | Read receipts | B открывает сообщение; A видит корректное прочтение, без чужого статуса | NOT TESTED |
| RC-P06 | Изменить/удалить своё | Временное тестовое сообщение редактируется и удаляется только своим автором | NOT TESTED |
| RC-P07 | Offline → reconnect | A временно отключает сеть, отправляет **одно** тестовое сообщение, восстанавливает сеть; B получает его ровно один раз | NOT TESTED |
| RC-P08 | Reopen while offline | A отключает сеть, отправляет **одно** тестовое сообщение, обновляет вкладку и восстанавливает сеть; сообщение не теряется и не дублируется | NOT TESTED |
| RC-P09 | Multi-tab | Одна учётная запись A в двух вкладках: по одному тестовому сообщению из каждой при offline, затем reconnect; оба доставлены однократно | NOT TESTED |
| RC-P10 | Account switching | A выходит, B входит на том же устройстве; личные чаты A не отображаются как B, очередь A не отправляется от B | NOT TESTED |
| RC-P11 | Мобильный UI | На узком экране доступны кнопки, ввод, меню, модальные окна, обратная навигация; без перекрытий | NOT TESTED |
| RC-P12 | Keyboard | Tab/Shift+Tab, Enter, Escape, фокус модального окна и меню работают без мыши | NOT TESTED |
| RC-P13 | Screen reader | Поля имеют доступные имена, сообщения об ошибках читаются, порядок фокуса разумен | NOT TESTED |
| RC-P14 | Группы/каналы P1 | Если оставлены включёнными в 1.0: на тестовой группе проверить вступление/выход, роль администратора, публикацию в тестовом канале | NOT TESTED |

Если приложение хранит тестовую offline queue с сообщением, **не очищайте localStorage, cookies, site data и профиль браузера** до разрешения доставки. Не делайте принудительную очистку ради «исправления».

## C. Только staging / Emulator / отдельный аудит

| ID | Gate | Статус |
| --- | --- | --- |
| RC-S01 | Отдельный staging Firebase; синхронизация Firestore/Storage Rules, доступы, настройки и откат | NOT TESTED |
| RC-S02 | Запрет постороннему читать чужие чаты/профили/файлы и менять членство; прямые запросы и denial tests | NOT TESTED |
| RC-S03 | Существующие legacy аккаунты, частичная регистрация и username claim recovery | NOT TESTED |
| RC-S04 | Миграция старой очереди на контролируемом профиле с резервной копией и проверкой сохранения ID | NOT TESTED |
| RC-S05 | Quota/permission-denied/storage-failure, recoverability, rollback и проверка отсутствия потери данных | NOT TESTED |
| RC-S06 | Финальная сверка утверждённых Production Rules с versioned rules (только чтение; без публикации) | NOT TESTED |

Если отдельного staging нет, эти пункты остаются **BLOCKED**, а не автоматически закрываются успешным Production smoke или Emulator CI.

## D. Решение о выпуске

- [x] Изменения Offline Queue объединены с main.
- [x] Quality CI, browser stress, Auth, Rules, Chat E2E и build на main завершились успешно.
- [x] GitHub Pages deployment завершился успешно.
- [ ] Ручная двухаккаунтная матрица B подтверждена.
- [ ] Staging/security/legacy и rollback gates C закрыты или документировано принято отдельное решение в рамках PROJECT_SPEC.
- [ ] Для включённых P1 проведена ручная проверка; непроверенные функции выключены или перенесены за пределы 1.0.
- [ ] Нет P0 / high security блокеров.
- [ ] Владелец явно принимает RC.
- [ ] Только после принятия RC — тег v1.0.0 и post-deploy smoke.

**Вердикт на 23.11.2026: NO-GO.** Автоматические ворота пройдены, ручные и staging/аудитные ворота остаются открытыми.

## E. Шаблон записи наблюдения

```text
ID: RC-P07
Статус: PASS | FAIL | BLOCKED | NOT TESTED
Дата и браузер:
Устройство/ширина экрана:
Аккаунты: A / B (без email, токенов или личных данных)
Наблюдение:
Ошибка/ссылка на GitHub issue:
```
