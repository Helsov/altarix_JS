function showResult (operand_a, operator, operand_b){
    try {
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
    } catch(e) {
        console.log(e);
    };
};

module.exports = {
	showResult
}