function person (name ,job, birthYear){
   this.name =name;
   this.job =job;
   this.dob = birthYear;
}
person.prototype.calculateAge=function(){//using person prototype object with calculate function
    console.log("age is "+ (2021-this.dob)); //here we ca use cunstructor functions values 
}
console.log(person.prototype); //printing person prorotype obj

//creating objects
person1 = new person("shashank","developer",1999);
console.log(person1);
person2 = new person("utkarsh","programmer",1998);
console.log(person2);

person1.calculateAge(); //calling function with person1 obj
person2.calculateAge();//calling functino with person2 obj

