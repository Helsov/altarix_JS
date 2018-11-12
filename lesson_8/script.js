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
            return console.log(result);
        };
    } catch(e) {
        console.log(e);
    };
};

showResult(3, '+', 5);
