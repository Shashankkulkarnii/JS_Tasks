var user = new Map([
    ['name','shank'],
    ['lname','kulkarni'],
    ['rollno',01],
]);
console.log(user.get('name')); //map with get method
user.set('class',12);//add new key value in user map with set()
console.log(user); 
console.log(user.has("lname"));//checking user map has lname key or not
user.delete('class');//deleting key value pair class which we set with ser()
console.log(user);//printg data with out class key value pair
console.log(user.size);

for (const ukey of user.keys()) {
    console.log(ukey);
    
}//printing keys of user map with .keys() with the helo of for of loop

for (const uvalue of user.values()) {
    console.log(uvalue);
    
}//printing values of the user map wit .values() with for of loop

for (const entry of user.entries()) {

    console.log(entry);
}//printing keys and values of the user map wit .entries() with for of loop

var obj = {
    "name":"utkarsh",
    "age":23,
};

var newmap = new Map(Object.entries(obj)); //puting obj object's value in to a newmap map with Object.entries(objname)
console.log(newmap);

var student = Object.fromEntries([  //converting map in to in object
    ['name','student1'],
    ['rollno','10'],
]);
console.log(student);