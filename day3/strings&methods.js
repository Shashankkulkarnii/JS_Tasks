
console.log(" \"hello\" shashank kulkarni");//printing string with ""
console.log(" \'hello\' shashank kulkarni");//printing string with ''
console.log(" hello\\ shashank kulkarni");//printing string with /


// var name = new String("shashank"); //this is bad practicd to create string with new keywodwhich is created object
// var lname =new String("Kulkarni");


//STRINGS METHODS

var me = "Hello everyone my name is Shashank Kulkarni, my fev color is blue";
console.log(me.length);//for find the length of string
console.log(me.toLowerCase());//to lover case iven string
console.log(me.toUpperCase());//to uper case string
console.log(me.includes("is"));//checking string have given string or not
console.log(me.startsWith("Hello"));//returning true is string start with the given string
console.log(me.endsWith("Blue"));// returning true is string end with the given string
console.log(me.search("everyone"));//serch given string in to string and reaturn index
console.log("match");
console.log(me.match(/my/g));//creating aray of given string is string gien 2 time so aray createed witht two ele
console.log(me.indexOf("my"));//for find the index of given word of string
console.log(me.lastIndexOf("my"));//if ther two same word in string to find last words index
console.log(me.replace(/is/g,"are"));//replcaing first parameter value to secod parameter value which is used in strings mevery time
var str = "javascript"
// alert(str.trim());
console.log(me.charAt(4));//returning char at given index
console.log(me.charCodeAt(6));//converting chr to charcode at the given index
console.log(String.fromCharCode(101));//coverting char code to char
var str1 = 'code';
console.log(me.concat(str,str1));//concate strings 
console.log(me.split(" "));//divide into many parts where given strings part maches 
console.log(me.repeat(3));//repeating string 
console.log(me.slice(3,10));//returning part of string 1 to 2 paerameter
console.log(me.substr(3,10));//returning partof string where first parameter is satrting string and second parameter index is started from first parameter
console.log(me.substring(7,9));//returning 3-5 index string part but scap 10th number string chr
console.log(me.toString(50));//converting into string
console.log(me.valueOf());//print value of string


