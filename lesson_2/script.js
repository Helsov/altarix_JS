function showResult (operand_a, operator, operand_b){
    try {
        if(typeof operand_a !== 'number' || typeof operand_b !== 'number' || typeof operator !== 'string') {
            throw console.error("Данные некорректны");
        } else {
            switch (operator){
                case '+':
                    var result = operand_a + operator + operand_b;
                    break;
                case '-':
                    var result = operand_a + operator + operand_b;
                    break;
                case '*':
                    var result = operand_a + operator + operand_b;
                    break;
                case '/':
                    var result = operand_a + operator + operand_b;
                    break;
                default:
                throw console.error("Оператор должен быть строкой");
            };
            return eval(result);
        }
    } catch(e) {
        console.log(e);
    }
}

showResult(3, '+', 5);

function arraySearch(arr, str){
    // return resultSearch = arr.filter(function(e){
    //     return ~e.indexOf(str);
    // }).length;

    return resultSearch = arr.filter( e => (~e.indexOf(str))).length;
};

var nameList = ['Вася', 'Коля Смирнов', 'Федя', 'Настя', 'Игорь', 'Маша', 'Игорь Петрович', 'Коля Иванов'];

arraySearch(nameList, 'Коля');
