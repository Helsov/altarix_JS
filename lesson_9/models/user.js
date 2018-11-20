const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost';

//Обработка данных для регистрации
signup = (name, email, password) => {
    MongoClient.connect(url, (err, client) => {
        const db = client.db('altarix');
        db.collection('user').insertOne({
            "name": name,
            "email": email,
            "password": password
        }, (err, result) => {
            assert.equal(err, null);
            console.log(result);
            console.log("Зарегистрирован новый пользователь");
        });
    });
}

//Обработка введенных данных для авторизации
validateSignIn = (username, password, callback) => {
    MongoClient.connect(url, (err, client) => {
        const db = client.db('altarix');
        //console.log(username,password);
        db.collection('user').findOne({
            "name": username,
            "password": password
        }, (err, result) => {
            if (result == null) {
                console.log('Ошибка авторизации');
                callback(false);
            } else {
                console.log('Авторизация прошла успешно');
                callback(true);
            }
        });
    });
}

module.exports = {
    signup,
    validateSignIn
}