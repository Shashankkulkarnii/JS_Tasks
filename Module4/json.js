var student ={
    name:"shashank",
    age:22,
    cources:["java","php","javaScript"],
}                                       //created object here


var jsonStudent = JSON.stringify(student);
console.log(jsonStudent);               //converted into json format with json.stringify()
console.log(typeof(jsonStudent));       //now to the type is string after conversion

jsonStudent = jsonStudent.replace('shashank','utkarsh');//replacining name shashank to utkarsh we also can do alot of changes in string
console.log(jsonStudent);

var jsonStudentToObjectStudent = JSON.parse(jsonStudent);
                                        // here we conver back json to object with json.parse()
console.log(jsonStudentToObjectStudent);// here we got object
console.log(typeof(jsonStudentToObjectStudent));// type is object now again