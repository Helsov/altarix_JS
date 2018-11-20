const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const user = require('./models/user');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();

app.use(express.static(path.join(__dirname, "/views")))
    .use(session({
        secret: 'my-secret',
        resave: true,
        saveUninitialized: true
    }));

app.use(bodyParser.urlencoded({
    extended: true
}));


//Создаем сессию авторизованного пользователя
app.post('/signin', (req, res) => {
    sessions = req.session;
    var user_name = req.body.inputName;
    var password = req.body.inputPassword;
    sessions.username = user_name;
    console.log(sessions);
    user.validateSignIn(user_name, password, (result) => {
        if (result) {
            sessions.username = user_name;
            res.send('Успешно');
        }
    });
});

app.post('/signup', (req, res) => { //Принимаем обработанные данные
    console.log(req.body);
    var name = req.body.inputName;
    var email = req.body.inputEmail;
    var password = req.body.inputPassword;

    //Если данные введены корректно то отправляем в метод user.js для добавления записи в БД
    name && email && password ? user.signup(name, email, password) : res.send('Ошибка');
})

//Выход из системы
app.get('/logout', (req, res) => {
    sessions.username = null;
    res.redirect('/');
});

//Добавляем новую страницу, в случае совпадения сессии и имени то перенаправлять в Home
app.get('/home', (req, res) => {
    if (sessions && sessions.username) {
        res.sendFile(__dirname + '/views/home.html')
    } else {
        res.redirect('/');
    }
})



//404 ошибка
app.use(function (req, res, next) {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

//Подключаемся к порту 30000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Подключился к порту ', port, app.settings.env);
})