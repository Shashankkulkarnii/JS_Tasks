
 
        var user = {
    fName : "shashank",
    lName : "kulkarni",
    uId : 01,
    psw : 123,

};
console.log(user); //print whole obj
console.table(user); //print whole obj in the form of table
console.log(user["fName"]); //printing value of fname key which is shashank
console.log(user.fName); //printing value of fname key which is shashank 2nd method

user.uId=02; //updating uid's value
console.log(user.uId); //printing uid's value

console.log(Object.keys(user)); // here how we use object.key()
console.log(Object.values(user)); // her how we use object.key()

for(const [key,value] of Object.entries(user)){//object.entries()
    console.log(`${key}: ${value}`);            
}

