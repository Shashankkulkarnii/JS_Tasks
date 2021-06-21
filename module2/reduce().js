var ary = [100,25,25,25];

var subtract = (total,ele) =>{ //function created for subtraction
    return total-ele;
}

var finalvalue=ary.reduce(subtract); //calling function with reduce method and puting value in finalvalue variable
console.log(finalvalue);//printing value of finalvalue

//using array.reduce method to sum of the array elemets
var sumthearyelements = (total,ele)=>{
 return total + ele;
}

var finalsum = ary.reduce(sumthearyelements);
console.log(finalsum);

