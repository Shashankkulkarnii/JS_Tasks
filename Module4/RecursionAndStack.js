var n=4;
function fun(n) {
    if(n==1 || n==0){
        return 1;
    }
    else{
        return n*fun(n-1);//repiating this line
        
    }
    
}

console.log(fun(n));