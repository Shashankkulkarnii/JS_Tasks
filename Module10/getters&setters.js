var obj = {
    name:"shashank",
    lastname:"kulkarni",
   get fullname() { //using getter
        return `${this.name} ${this.lastname}`;
        
    },
    set fullname(value){ //using setter
        const parts = value.split(' '); //spliting the full name in parts 
        this.name =parts[0];//change fname with first part 
        this.lastname =parts[1];//chamge lname with second part
    }
}
console.log(obj.fullname);//with the getter we can directly call the function with out ()
obj.fullname = "utkarsh khedekar";//passing the value
console.log(obj.fullname);