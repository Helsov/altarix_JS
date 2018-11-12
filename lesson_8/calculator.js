function showResult (operand_a, operator, operand_b){
    return eval(`${operand_a} ${operator} ${operand_b}`);
};

module.exports = {
	showResult
}