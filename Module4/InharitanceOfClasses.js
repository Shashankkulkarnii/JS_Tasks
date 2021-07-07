//useing inharitance using cunstructor
class c{
    constructor(companyname,carname){
        this.companyname=companyname;
        this.carname=carname;
    }
    cardeatailes(){
        console.log("car company is = "+this.companyname);
        console.log("car car name is = "+this.carname);
    }

}
class d extends c{
    carfullname() {
        console.log(this.companyname+" "+this.carname);
    }
}

var opobj= new d("ford","freestyle");
opobj.cardeatailes();
opobj.carfullname();