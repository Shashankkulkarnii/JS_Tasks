// //using this with constructer function

// function Person(pname,plname)
// {
//     this.pname = pname;
//     this.plname =plname;
//     this.Pfullname = function()
//     {     
//         console.log(this.pname+" "+this.plname);

//     }
// }

// var person1= new Person("shank","kulkarni"); //creating new epty object with help of new keyword to hold this values in object
// console.log(person1);//printing whole function
// person1.PfullName;


// Constructor function for Person objects
function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = function() {
        console.log(this.firstName+" "+this.lastName); 
    };
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe");
  
  // Display full name
 myFather.name();
//   document.getElementById("demo").innerHTML =
//   "My father is " + myFather.name(); 

function me(fname,lname){
    //created virtual object
    this.fName=fname;
    this.lName=lname;
    this.fullname = function(){
        console.log(this.fName+" "+this.lName);
    }
    //and here return object virtually
}

var me1 = new me("shank","kulkarni"); // creating new epty object with help of new keyword to hold this values in object
me1.fullname();