// принимает функцию и контекст вызова, возвращает функцию, 
// которая всегда будет иметь корректный контекст вызова 

//function bind(func, context) { ... return function () { ... } } 

function bind (func, context) {
    return () => func.call(context, arguments);
};

function infoConsole(){
    return console.log(this);
}
var user = {
    name:'Ivan',
    familia: 'Fedorov'
};

bind(infoConsole, user)();


// не принимает аргументов, возвращает функцию, 
// которая возвращает результат parseInt, если вызвана с таким аргументом впервые, 
// иначе не вычисляет заново, а возвращает сохранённое значение 

//function parseIntWithCashe() { ... return function () { ... } } 

function parseIntWithCashe() {
    var a;
    return function(){
        return arguments ? parseInt(arguments[0]) : a;
    };
};

parseIntWithCashe()('24year');


// принимает любое количество аргументов, 
// возвращает их сумму, без for

//function getTotalSum(a, b, c, ...) { ... } 

function getTotalSum () {
	return [...arguments].reduce((a, b) => a + b);
};

getTotalSum(1, 2, 56, 5, 102);


// * универсальный кэширующий декоратор