var a = "12";
console.log(Number(a)+3);//convert string into number 
var b = 9.99;
console.log(parseInt(b));//returning only int number
var c = "10.33 year";
console.log(parseFloat(c)); //reurning only numbers
var d = 564;
console.log(Number.isFinite(d));//checking number is finite or note
var e = 65.56;
console.log(Number.isInteger(e)); //checking number is integer or not
var f = 78.9243
console.log(e.toFixed(2)); //we can fix numbers how number we wan after (.) point
var g = 423.8749;
console.log(g.toPrecision(6));//retuning total 6 digits