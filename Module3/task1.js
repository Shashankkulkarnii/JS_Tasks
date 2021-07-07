//Provided array
var ary = [
    {id:1,name:"Amit Kumar",age:25},
    {id:2,name:"Rahul Dixit",age:20},
    {id:3,name:"Ravi Joshi",age:55},
    {id:4,name:"Rohit Verma",age:35},
    {id:5,name:"Ajay Jain",age:17},
];



//a. Print id and name of the youngest and oldest person

var ary1=[];
var ary2=[];
var ary3=[];
var i=0;


for(i=0 ;i<5;i++){
    ary1[i] = ary[i].age;
    ary2[i] = ary[i].name;
    ary3[i] = ary[i].id;
}
var idyoung;
var nameyoung;
var z=  ary1.filter((ele,index)=>{
  h=Math.min(ele);
  idyoung=ary3[index];
  nameyoung=ary2[index];
    return h;
  
})
console.log(h);
console.log("id is youngest person = " + idyoung + "and Name is = "+nameyoung);
// console.log(nameyoung);


// b. Create another list having id and name of all the person above 18 years
var holder=0;
var listWitidAndName = [];
var id18;
var name18;
var h;

 ary2.filter((ele,index)=>{
    {ele>18}{
        var name18=ary2[index];
        var id18=ary3[index];
    }
    listWitidAndName.push({"id":id18},{"name":name18});
  
})

console.log(listWitidAndName);




// c. Find the average age
var avg=ary1.reduce(function(total,ele){ 
    return total+ele;

 });
 console.log( 'Average age is = '+avg/ary.length);



 //d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively
var alist = ary2.filter((ele)=>{
    if(ele.charAt(0)=="A"){
        return ele
      }
})
console.log(alist);//printing list with start with A names


var rlist = ary2.filter((ele)=>{
    if(ele.charAt(0)=="R"){
        return ele
      }
})
console.log(rlist); //printing list with start with R names











 






    
    