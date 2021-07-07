var ary=["red","green","pink","blue","Yellow"];
console.log(ary.toString()); //converting ary in to string
console.log(ary.join("//")); // joint string with given strings and give as string
console.log(ary.pop());//deleting last ele of array and print
console.log(ary);
console.log(ary.push("yellow")); //ading ele in aray and give the new length of array
console.log(ary);
console.log(ary.shift());//remove first element and shifting lower element to fist and return the removed value
console.log(ary.unshift("red"));//added element into first position and giving the new length of ary
console.log(ary[0]="velvet");// adding new ele into ary and print ele name
console.log(ary[ary.length]="shank"); //ading new ele in last position and print element
console.log(ary[ary.length]="utkarsh");
console.log(ary[ary.length]="kapil");
console.log(ary);
delete ary[0];
console.log(ary);
console.log(ary.splice(5,2,"orange","purple")); //item  add at first parameter place and and remove next elemets with 2nd parameter value
console.log(ary);
console.log(ary.splice(0,2));
console.log(ary);
var ary1 =["shank","kapil","utkarsh"];
var ary2 =["rohit","mohit","rishabh"];
var ary3 =["rohit","mohit","rishabh"];
var team = ary1.concat(ary2,ary3);
console.log(team);
var team2 =  ary1.concat("pinky");//concate ele to aray last place
console.log(team2);

var arr = ["shank","kapil","utkarsh","mohit"];
console.log(arr.slice(1));//cut part of ary and return cuted part
console.log(arr.slice(3));//slicing 1 to 3
