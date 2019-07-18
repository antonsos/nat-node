const dotenv = require('dotenv');
// Подкружаем нужные на dev переменные окружения
dotenv.config({path: '.config.env'});

// Можем exports app object потому что модули в node кешируются
const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`)
});
