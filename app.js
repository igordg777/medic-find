const express = require("express");
const app = express();

const path = require('path');
// urlencoded.
app.use(express.urlencoded({ extended: true }));
// json.
app.use(express.json());

// Подключаем статику
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем views(hbs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('1 copy');
});
// Отображаем главную страницу с использованием шаблона "index.hbs"
app.get('/doctors/info', function (req, res) {
    res.render('index');
});
app.get('/doctors/doc', function (req, res) {
    res.render('1');
});

{/* <a href="/doctors/clinics">Клиники</a>
<a href="/doctors/doc">Врачи</a> */}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on " + port));