var ary =[1,2,3,4,5,6,7];

var greaterthen5 = (ele) =>{ // checking array have greater no or not then 5
    return ele>5;

}
var op = ary.some(greaterthen5); //calling function with some() and hold value in op variable
console.log(op);

var op1 =ary.some((ele)=>{ // checking aray have 10 or not with some with arrow function 
    return ele == 10;
})
console.log(op1);