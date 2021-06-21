'use strict';
var ary =  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

//sum of ary list
var sum = (total,ele) => total + ele;
var sumOp = ary.reduce(sum);
console.log(sumOp);

//min no of list
console.log(Math.min.apply(Math, ary));

//man no of list
console.log(Math.max.apply(Math,ary));

// Printing “List is full of prime no” if every element is prime
var primeary=[];
var Prime =(no)=> {
    if(no===1){
                return 0;
            }  
            if(no ===2)
            {
                return no 
                
                // primeary[j]=no;
                // j++;
            }
            else{
                var x=2;
                if(x<no){
                    for(let i=0 ; i<10;i++){
                     if(no%x===0){
                     return 0;
                    
                    }
                    else{
                        return no;
                        // primeary[j]=no;
                        // j++;
                    }
                }
                    
                }
            }

}
for(let i=0;i<ary.length;i++){
    var output = Prime(ary[i]);
    if(output>0){
        primeary.push(output);
    }
}
console.log("prime no list "+primeary);
if(primeary.length==ary.length){
    console.log("List is full of prime no");
}
else{
    console.log("List is NOT full of prime no");

}

//Printing “List has a prime no” if there is a prime no in it
if(primeary.length>0){
    console.log("List has a prime no");
}
else{
    console.log("List do not have any prime number");
}

//Removing duplicate values from the list without using loop 
// or any of the above methods (map(), filter(), reduce(), some() and every())
var newset = new Set (ary);
console.log(newset);






