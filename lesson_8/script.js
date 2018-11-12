let calculator = require('./calculator.js').showResult;
let operand_a  = process.argv[0];
let operator = process.argv[1];
let operand_b = process.argv[2];


console.log(calculator(`${operand_a}`, `${operator}`, `${operand_b}`))