function showResult (operand_a, operator, operand_b){
    var operand_a = Number(operand_a);
    var operand_b = Number(operand_b);
    var operator = String(operator);

    try {
        if(typeof operand_a !== 'number' || typeof operand_b !== 'number') {
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
                throw console.error("Оператор должен быть: +, -, * или /");
            };
            return result;
        };
    } catch(e) {
        console.log(e);
    };
};

module.exports = {
	showResult
}