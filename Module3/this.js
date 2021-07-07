
//using this keyword with object and cocate string
var user = {
    Name : "Shashank",
    LastName:"kulkarni",
    onlyname : function(){           //here we use function as a object key value
        console.log(this.Name);   
    },
    fullName : function(){
        console.log(this.Name +" "+this.LastName);

    },
}
console.log(user);//printing whole object
console.log(user.Name);//printing name simply with obj.key
console.log(user.LastName);//printing lastname simplay with obj.key
user.onlyname();//printing name with calling function
user.fullName();//printing full name




