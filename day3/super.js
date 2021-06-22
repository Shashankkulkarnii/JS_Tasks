
		
			class Person {
				constructor(name, age) {
					this.name = name;
					this.age = age;
				}
				dance() {
					return this.name + " dancing ";
				}
				run() {
					return this.name + " is at running";
				}
				sing() {
					return this.name + " is singing";
				}
			}
			class FashionDesigner extends Person {
				constructor(name, age) {
					super(name, age);
				}
				programmer() {
					return this.name +
					" is a Fashion Designer";
				}
				doTasks() {
					return super.dance() + this.programmer();
				}
			}
			function display(content) {
				console.log(content);
			}
			const character =
			new FashionDesigner("Sayan", 30);
			display(character.dance());
			display(character.run());
			display(character.sing());
			display(character.doTasks());



            class student{
                constructor(sname,sage){ //creating cunstracor function
                    this.sname=sname;//usnig this keyword 
                    this.sage=sage;
                }
                play(){
                    return this.sname + " is playing"
                }
                game(){
                    return this.sname + " is gaming";
                }
                
            }
            class school extends student{ //inharite previous class into new 
                constructor(sname,sage){ //created cunstrctor function again for new class
                    super(sname,sage);//use super for value
                }
                study(){
                    return this.sname + " is studies";
                }
                works(){
                    return super.play() +" "+ this.study(); //using super as a play() method of previous class and using this for current class
                }
            }

            function displayresult(ans){
                console.log(ans);
            }

var student1 = new school("shashank",22);
displayresult(student1.game()); 
displayresult(student1.play());
displayresult(student1.works());