// A simple way to create an class, basic syntax
class a{
     name() {
        console.log("hello i am class a");
    }
}
var obja = new a();
obja.name();



// class with cunstructor function

class b {
    constructor(name,lname){
        this.name=name;
        this.lname=lname;
    }
    printfullname(){
        return this.name+" "+this.lname;
    }
}


var objb = new b("shashank","kulkari");
var op =objb.printfullname();
console.log(op);



