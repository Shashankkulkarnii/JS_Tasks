var ary =[22,16,21,18,15];
console.log(ary.filter(function(ele){ //direct using filter method and created fuction into a filter method
   return ele>=18;
    
}));


//using filter() with arrow function and calling function while creating an array and filter them.

var canvote = (ele) => {
    return ele >=18;

}
var ary1 = [34,23,11,12,37,54].filter(canvote);//holding value after filteration in ary1
console.log(ary1);