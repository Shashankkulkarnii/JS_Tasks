function fun(...inputs){ //taking parameres with rest its hold in aray automatically 
    console.log(inputs);
    let total=0;
    for (const i of inputs) {
               total += i;
               
    }
    console.log(total);
}

fun(1,2,3,4,5,6,7,8,9,10); //here we pass 10 argumrnts and they auto matically assignas ary in fun of parameters

var fun2 = (a,b,...c)=>{

    console.log(a+" "+b);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
}
fun2('shashank','utkarsh','kapil','mohit');