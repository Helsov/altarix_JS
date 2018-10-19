//#1
// Функция – калькулятор. Получает 3 аргумента: первый операнд, оператор (+, -, *, /), второй операнд. Если операнды не являются числами, функция выбрасывает исключение. Если передан неизвестный оператор – функция выбрасывает исключение. Возвращает результат операции.

function showResult (operand_a, operator, operand_b){
    try {
        if(typeof operand_a !== 'number' || typeof operand_b !== 'number' || typeof operator !== 'string') {
            throw console.error("Данные некорректны");
        } else {
            switch (operator){
                case '+':
                    var result = operand_a + operand_b;
                    break;
                case '-':
                    var result = operand_a - operand_b;
                    break;
                case '*':
                    var result = operand_a * operand_b;
                    break;
                case '/':
                    var result = operand_a / operand_b;
                    break;
                default:
                throw console.error("Оператор должен быть: +, -, * или -");
            };
            return eval(result);
        }
    } catch(e) {
        console.log(e);
    }
}

showResult(3, '+', 5);

//#2
// Функция получает первым параметром массив, каждый элемент которого является строкой. Вторым параметром подстроку для поиска. Возвращает количество элементов массива, которые содержат переданную подстроку.

function arraySearch(arr, str){
    return resultSearch = arr.filter( e => ~e.indexOf(str)).length;
};

var nameList = ['Вася', 'Коля Смирнов', 'Федя', 'Настя', 'Игорь', 'Маша', 'Игорь Петрович', 'Коля Иванов'];

arraySearch(nameList, 'Коля');

//#3
// Функция получает число и возвращает строку с отформатированным значением вида «(-) 00 000 000,00». Разделитель разрядов – пробел, разделитель целой и дробной части - запятая. Количество знаков после запятой – от 0 до 2-х.

function showDecimal(count){
    let event = count.toFixed(2);
	event = parseFloat(event);
    return event.toLocaleString();
}

showDecimal(1005006.525);