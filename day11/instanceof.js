function car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;


}
var instanceofcar = new car("Ford","freestyle","2020");//with new it retuns true

console.log(instanceofcar instanceof car);
console.log(instanceofcar instanceof Object);



function bike(name,year){
    name=name;
    year=year;
}
var instanceofbike = bike("bajaj","pulser"); //without new key word itreturns false  
console.log(instanceofbike instanceof bike);//withou construtor key word itreturns false
console.log(instanceofbike instanceof Object);