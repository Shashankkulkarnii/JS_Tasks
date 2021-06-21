var shank= {name :  'shank'}; //creating an object with name of shank
var shantanu={ name : 'shantanu'};

var newset = new Set();//creating new set wit newset name
newset.add(shank);
newset.add(shank)//adding shank two time but it come only one time
newset.add(shantanu);
console.log(newset);
console.log(newset.size); //we added 3 names but it show size of set is 2 bcz of no duplicacy nature of set
for (const names of newset) {
    console.log(names);//printing set values with for of loop 
}

newset.add('kapil');
newset.delete('kapil');//deleting value with .delete()
console.log(newset);


var newset1 = new Set(['red','orange','black','gold']);
for (const colors of newset1) {
    console.log(colors);
    
}