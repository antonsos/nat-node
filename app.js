const express = require('express');
const morgan = require('morgan');

const app = express();

// MIDDLEWARE встроенные функции для предворительной обработки всех запросов
// Логировать запросы в console
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Форматировать res.body в object
app.use(express.json());
// Подключаем папку с статическими файлами
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = Date().toString();
  next();
});

module.exports = app;
