let calculator = require('./calculator.js').showResult;
let operand_a  = process.argv[2];
let operator = process.argv[3];
let operand_b = process.argv[4];


console.log(calculator(operand_a, operator, operand_b))