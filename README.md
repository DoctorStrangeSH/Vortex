<div align="center">

<img src="public/vortex-mark.svg" width="88" height="88" alt="Vortex logo">

# Vortex Messenger

**Лаконичный веб-мессенджер для личного общения и небольших сообществ.**

Preact · Vite · Firebase Authentication · Cloud Firestore

[Открыть приложение](https://doctorstrangesh.github.io/Vortex/) · [Единое ТЗ](docs/PROJECT_SPEC.md) · [План релиза](ROADMAP.md) · [Проблемы](https://github.com/DoctorStrangeSH/Vortex/issues)

[![Quality checks](https://github.com/DoctorStrangeSH/Vortex/actions/workflows/quality.yml/badge.svg?branch=main)](https://github.com/DoctorStrangeSH/Vortex/actions/workflows/quality.yml)
[![Deploy to GitHub Pages](https://github.com/DoctorStrangeSH/Vortex/actions/workflows/pages.yml/badge.svg?branch=main)](https://github.com/DoctorStrangeSH/Vortex/actions/workflows/pages.yml)
![Status](https://img.shields.io/badge/status-RC%20validation-8b7cf6)
![Node.js](https://img.shields.io/badge/Node.js-22-43853d?logo=node.js&logoColor=white)

</div>

---

## О проекте

Vortex — адаптивный браузерный мессенджер с русскоязычным интерфейсом. Приоритет версии **1.0** — надёжная личная переписка: сообщения, история, статусы прочтения, восстановление после временной потери сети и безопасное разграничение доступа.

Проект развивается в рамках зафиксированного scope. Новые идеи не расширяют релиз автоматически.

## Текущий статус

| Область | Состояние |
|---|---|
| Вход, регистрация и профиль | Реализация и автоматические проверки в репозитории |
| Личная переписка и отправка текста | Работает; владелец подтвердил восстановление Production-отправки после синхронизации Firestore Rules |
| Офлайн-очередь | Исправлена; 100 раундов / 200 сообщений и recovery сценарии прошли CI |
| Сообщения и реакции | Реализация; основные browser/unit проверки добавлены |
| Firestore Security Rules | Синхронизированы владельцем с актуальным firestore.rules; Emulator tests проходят в CI |
| GitHub Pages | Автоматическая публикация из main |
| Полная приёмка Vortex 1.0 | Не завершена; ручная двухаккаунтная smoke-проверка и RC-матрица обязательны |

> **Важно:** зелёный CI подтверждает проверки кода и эмуляторов, но не заменяет staging-приёмку с двумя независимыми аккаунтами. До завершения релизной проверки не используйте Vortex для чувствительной переписки. Обычные сообщения не имеют end-to-end encryption.

## Возможности текущего scope

- Регистрация, вход, выход и восстановление доступа.
- Уникальный публичный @username и разделение публичных/приватных данных профиля.
- Личные чаты, realtime-сообщения и постраничная история.
- Идемпотентная офлайн-очередь и повторная отправка.
- Статусы прочтения с учётом участников.
- Реакции, закрепление и базовые вложения в рамках подтверждённых ограничений.
- Группы и каналы — при соблюдении утверждённых правил доступа и критериев качества.
- Адаптивный интерфейс и тема Obsidian Iris.

Подробная матрица требований и критерии готовности находятся в [PROJECT_SPEC.md](docs/PROJECT_SPEC.md).

## Технологии

| Слой | Технология |
|---|---|
| UI | Preact |
| Сборка и dev server | Vite |
| Авторизация | Firebase Authentication |
| Данные и realtime | Cloud Firestore |
| Доступ | Firestore / Storage Security Rules |
| Тесты | Node.js Test Runner, Firebase Emulator Suite, Chromium + Playwright |
| Публикация | GitHub Pages + GitHub Actions |

## Быстрый старт

**Требования:** Node.js 22 и Java для Firebase Emulator Suite.

    git clone https://github.com/DoctorStrangeSH/Vortex.git
    cd Vortex
    npm ci
    npm run dev

Локальная разработка использует текущую конфигурацию Firebase. Не создавайте тестовые аккаунты и переписки в Production. Для интеграционных проверок используйте отдельный Firebase staging-проект и конфигурацию .env.staging.local.

### Проверки перед PR

    npm test
    npm run test:browser
    npm run test:rules
    npm run test:auth
    npm run build

Quality workflow выполняет эти команды автоматически на pull request и push в main.

## Firebase и бюджетные ограничения

- Владелец зафиксировал **Firebase Spark**. Не переключать проект на Blaze и не подключать платную инфраструктуру без отдельного явного разрешения.
- Firebase Storage остаётся выключенным до отдельной проверки тарифа, CORS, правил и upload/read/revocation в staging. Документированный fallback — вложения в Firestore до 350 КБ.
- Callable Cloud Functions не входят в текущий клиентский поток; каталог functions/ сохранён как отложенный reference/test fixture и не является целью Firebase CLI deployment.
- Не публиковать Security Rules, не выполнять миграции и не менять Production-данные автоматически.
- Web API key Firebase не является административным секретом. Service-account JSON, приватные ключи и токены нельзя помещать в Git или клиентский bundle.

### Изолированная staging-конфигурация

1. Создайте отдельный тестовый Firebase-проект.
2. Скопируйте .env.example в .env.staging.local.
3. Заполните переменные VITE_FIREBASE_* значениями staging-проекта.
4. Запустите npm run dev -- --mode staging.
5. Проверьте регистрацию, личный чат, сообщения, offline/retry и отказ в доступе постороннему пользователю.

Не используйте Production для staging-проверок. Перед любыми будущими Production-изменениями нужны резервная копия, план отката и явное подтверждение владельца.

## Структура репозитория

    .
    ├── .github/workflows/   # CI и публикация GitHub Pages
    ├── config/              # Примеры конфигурации
    ├── docs/                # ТЗ, security review и технические решения
    ├── functions/           # Отложенный backend reference/test fixture
    ├── public/              # Публичные ресурсы и знак Vortex
    ├── server/              # Чистые модели/адаптеры серверных событий
    ├── src/
    │   ├── components/      # Preact UI
    │   ├── hooks/           # UI hooks
    │   ├── services/        # Firebase и прикладная логика
    │   ├── stores/          # Состояние приложения
    │   ├── styles/          # Темы и глобальные стили
    │   └── utils/           # Общие утилиты
    ├── tests/               # Unit, Emulator и browser regression tests
    ├── firestore.rules
    ├── storage.rules
    └── vite.config.js

## Документация

- [Единое ТЗ Vortex 1.0](docs/PROJECT_SPEC.md) — единственный источник требований и границ релиза.
- [ROADMAP](ROADMAP.md) — краткий статус этапов и ближайшие release gates.
- [Firebase Security Review](docs/FIREBASE_SECURITY_REVIEW.md) — модель доступа, инциденты и ограничения.
- [Storage staging checklist](docs/STORAGE_STAGING_CHECKLIST.md) — условия включения Storage.
- [Unread counters design](docs/UNREAD_COUNTERS_DESIGN.md) — архитектура непрочитанных сообщений.

## Процесс разработки

1. Каждая задача должна соответствовать разделу или требованию из PROJECT_SPEC.md.
2. Исправления, тесты, безопасность, доступность и документация допустимы в рамках scope 1.0.
3. Новые функции, расходы, миграции и изменение уровня приватности требуют отдельного решения владельца.
4. PR должен описывать пользовательскую проблему, изменения, проверки и риски.
5. Не объединять PR с красным обязательным CI.
6. Не считать наличие компонента доказательством готовности функции.

## Публикация

GitHub Actions собирает приложение с базовым путём /Vortex/ и публикует его на GitHub Pages:

**https://doctorstrangesh.github.io/Vortex/**

Источник публикации в GitHub Pages должен быть установлен в **Settings → Pages → Build and deployment → GitHub Actions**.

---

<div align="center">

**Vortex — сначала надёжность. Потом масштаб.**

</div>
