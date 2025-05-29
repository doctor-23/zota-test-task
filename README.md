# Приложение для регистрации и профиля

Vue 3 приложение с TypeScript и Pinia, реализующее регистрацию пользователя и страницу профиля.

## Возможности

- Форма регистрации с валидацией полей
- Ввод номера телефона с маской
- Переключение видимости пароля
- Страница профиля с приветствием
- Сохранение сессии пользователя через localStorage
- Адаптивный дизайн

## Требования

- Node.js 16 или выше
- npm 7 или выше

## Установка

1. Клонируйте репозиторий
2. Установите зависимости:
```bash
npm install
```

3. Запустите сервер разработки:
```bash
npm run dev
```

4. Сборка для продакшена:
```bash
npm run build
```

## Поддерживаемые браузеры

### Десктоп
- Последние версии Chrome
- Последние версии Firefox
- Последние версии Safari

### Мобильные
- Safari iOS
- Chrome для Android

## Используемые технологии

- Vue 3
- TypeScript
- Pinia 2
- Vue Router
- imaskjs (для маски ввода телефона)

## Рекомендуемая среда разработки

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (и отключить Vetur), [WebStorm](https://www.jetbrains.com/webstorm/).

## Типизация `.vue` файлов в TS

TypeScript по умолчанию не поддерживает типизацию `.vue` файлов, поэтому для проверки типов используется `vue-tsc`. В редакторе рекомендуется использовать [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) для корректной работы с типами.

## Кастомизация конфигурации

См. [Vite Configuration Reference](https://vite.dev/config/).

### Линтинг с помощью [ESLint](https://eslint.org/)

```sh
npm run lint
```
