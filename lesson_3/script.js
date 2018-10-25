// принимает функцию и контекст вызова, возвращает функцию, 
// которая всегда будет иметь корректный контекст вызова 

//function bind(func, context) { ... return function () { ... } } 

function bind (func, context) {
    return ()=> func.call(context, arguments);
};

function getConsole(){
    return console.log(this);
}
var getName = {
    name:'Ivan',
    familia: 'Fedorov'
};

bind(getConsole, getName)();


// не принимает аргументов, возвращает функцию, 
// которая возвращает результат parseInt, если вызвана с таким аргументом впервые, 
// иначе не вычисляет заново, а возвращает сохранённое значение 

//function parseIntWithCashe() { ... return function () { ... } } 

function parseIntWithCashe () {
    return function(){
        return parseInt('F',16);
    }
};


// принимает любое количество аргументов, 
// возвращает их сумму, без for

//function getTotalSum(a, b, c, ...) { ... } 

function getTotalSum () {
	return [...arguments].reduce((a, b) => a + b);
};

getTotalSum(1, 2, 56, 5, 102);


// * универсальный кэширующий декоратор