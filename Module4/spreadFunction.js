function fun(x,y,z) {
    var total = x+y+z;
    console.log(total);
}
var ary1=[1,2,3];
fun(...ary1);//spread function here we can pass arguments as ary


var ary2=[1,2,3];
var total1=0;
function fun1(...inputs) { //here we use rest parameters
    for (const i of inputs) {
        total1 += i;        
    }

    console.log(total1);
}
var ary2=[1,2,3];
fun(...ary1);//spread function here we can pass arguments as ary