//extends aray wit class

class a extends Array{
    multiplyByTwo(){
        let returnary=[];
        this.forEach(value => returnary.push(value*2));//here we multiply ary wit 2 using this and for each loop
        return returnary;
    }
}
let aryClassObj = new a();
aryClassObj.push(1);
aryClassObj.push(2);
aryClassObj.push(3);
aryClassObj.push(4);
aryClassObj.push(5);
console.log(aryClassObj.multiplyByTwo());



class b extends Object{
    funn(){
       
        console.log(this.name+" "+this.surname);
        
    }
}

var opobjectObj = new b();
opobjectObj.name="shank";
opobjectObj.surname="kulkarni";
opobjectObj.funn();

// var k = {}