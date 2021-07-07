var ary = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //ary


var odd = ele=> ele % 2 != 0;  //created single line arrow function for returning odd number in ary
var opOdd = ary.filter(odd); // using filter method with odd function
console.log(opOdd);//printing op

var even = ele=> ele % 2 == 0;
var opEven = ary.filter(even);
console.log(opEven);

//prime no
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
    // primeary[i]=output;
   
   
}
console.log(primeary);