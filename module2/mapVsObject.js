var userobj = { name : "shashank", lName : "Kulkarni", age: 22}
console.log(userobj);

var usermap = new Map([
    ["name","shashank"],
    ["lName","Kulkarni"],
    ["age","22"],
    
]);
console.log(usermap);

var newmap = new Map([
    [{name:"shank"},"kulkanri"], // here we create object as key but in object we just creacte no, ineger or string type of keys
    [1,"1 is number"],
    ['shank','shank is string'],
])

console.log(newmap);

