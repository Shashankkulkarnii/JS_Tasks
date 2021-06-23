var total = 0;
function fun(){
    for (const i of arguments) {
        total += i;
        
    }
    console.log(total);



}

fun(12,5,36,11,72,22,14,36);