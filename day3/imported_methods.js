var lib = require('./exported_method');//using require key word for for import libery or methods from anoter function as a object
var num1=10;
var num2=5;

console.log("sum = "+lib.sum(num1,num2)); //calling ontoters programs function by pasing this programs values
console.log("sum = "+lib.sub(num1,num2));