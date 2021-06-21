var shank = name => "my name is "+ name;  //arrow function  in single line with one paramiter and with uding retun statement 
var op = shank("shashank kulkarni"); //pasing value to function 
console.log(op); 

var user = (name,surname) => "my name is " + name + " and surname is "+ surname;
                                          //creating function with two argument in single line with out using retun statment

console.log(user('Shashank','Kulkarni'));       

//now we creating multiline arrowline function with two arguments
var user1 = (name,surname) =>{
    let fullname = 'my name is '+ name +' '+ surname;
    return fullname;
}
console.log(user1('Shashank' ,'kulkarni'));