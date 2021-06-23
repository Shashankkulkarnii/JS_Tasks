function* gen(){  //genrator function used to gentare value 
    yield 1;      //its return value with yield keyword not with return keyword
    yield 2;      //after returning value its end the function and calling second it go to second line 
    yield 3;      // like here we call it one so it gives 1 but when we call second time
    yield 4;      // it gives 2 coz it was skied the i yeild
}

var genObj = gen();
console.log(genObj.next().value);//calling finction for 1st value
console.log(genObj.next().value);//calling finction for 2nd value
console.log(genObj.next().value);//calling finction for 3rd value
console.log(genObj.next().value);//calling finction for 4th value


console.log("natural numbrs");
function* naturalgen(){
    var naturalno = 1;
    while(true){
        yield naturalno++;  //here this functioncan gives infanite numbers however we call 
    }
}
//calling the gen fun
var natuaralgenObj = naturalgen();
for(let j =0;j<10;j++){
console.log(natuaralgenObj.next().value);
}