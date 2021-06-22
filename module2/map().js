var ary = [2,3,4,5];
var newary = ary.map(function(val , index){  //creating new array with map() where we can perform opration with each value of array
    return {key: index, value: val};
});
console.log(newary);

var ary1 = ['shank','utkarsh','kapil'];
var newary1 = ary1.map(function(val ,index){   //here we concate string with a in the aray wit ma()
   return  val + "a "+index;
})
console.log(newary1);


var ary3 =[2,3,4,5].map((val)=>{    //multiplay 10 with each element of array with arrow function
    return val*10;
})
console.log(ary3);
