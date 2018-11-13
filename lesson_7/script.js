/*Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }. Запишите соответствующие значения в переменные name, surname и age. Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'} */

var user = {
    name: 'Петр',
    surname: 'Петров',
    age: '20 лет'
}

var {name = 'Аноним', surname = 'Анонимович', age = '? лет'} = user;

/* Дана строка. С помощью for-of подсчитайте количество букв 'о' в ней – строку передаём как параметр функции */

function rowComes(string) {
    let map = new Map();
    let key = 0;
    for(var value of string) {
        if (value !== 'o') {
            key++;
            continue;
        }
        map.set(key, value);
    }
    console.log(map.size);
}

rowComes('Logopedos');

/*----------------------------------------------*/

function rowComesTwo(string) {
    for(var value of string) {
        if (value !== 'o') {
            continue;
        }
        console.log(value);
    }
}

rowComesTwo('Logopedos');

/* Дан объект с настройками, например, {id: 'elem', color: 'blue', border: '1px solid red', font: '15px Arial'}. Сделайте функцию, которая получает этот объект, извлекает из него все настройки в соответствующие переменные и для элемента с указанным id (в нашем случае это 'elem') ставит заданные CSS свойства. В объекте могут быть только эти ключи, однако, какой-либо ключ (кроме id) может быть не задан - в этом случае пусть возьмутся следующие значения по умолчанию: color: 'blue', border: '1px solid red', font: '15px Arial'. */


window.onload = function(){
    var elemChar = {
        id: 'elem',
        color: 'blue',
        border: '1px solid red',
        font: '25px Arial'
    };
    
    function parsingItem(element){
        var {id, color='red', border='1px solid red', font='15px Arial'} = element;
        return document.getElementById(id).style.cssText = `color: ${color}; border: ${border}; font: ${font}`;
    };
    
    parsingItem(elemChar);
}



/* Дан массив с числами. Создать функцию, которая с помощью цикла и метода add добавит все элементы этого массива в коллекцию Set. Причем у функции будет два параметра – массив поэлементно (не объект массива, а все элементы передать в параметры), option – отвечает за выбор чисел из массива. Должны быть доступны опции – четные числа, нечетные числа, все подряд числа. */

var collectionNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function arrayHandler(array, option){
    var set = new Set();
    var option = option.toLowerCase();

    try {
        if(typeof array !== "object"){
            throw alert("Данные некорректны. Введите массив.");
        } else {
            array.forEach(e => set.add(e));
            
            switch(option){
                case 'четные':
                    var result = set.forEach(num => ~num % 2 ? console.log(num) : null);
                    break;
                case 'нечетные':
                    var result = set.forEach(num => num % 2 ? console.log(num) : null);
                    break;
                default:
                var result = set.forEach(num => console.log(num));
            };
            return result;
        }
    } catch (e) {
        console.log(e);
    }

};

arrayHandler(collectionNumber, 'Нечетные');