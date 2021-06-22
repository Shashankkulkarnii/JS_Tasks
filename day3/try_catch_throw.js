try{
    var a = sum(10,20);    //try if we want to do sumoting that migth give error
}
catch(ex){  //passing argument for error 
    console.log("the thing is here we got "+ex+" so plz defined it otherwise you got error and error and error"); //printing error
}

try{
    var a = sum(10,20);    //try if we want to do sumoting that migth give error
}
catch(ex){  //passing argument for error 
    console.log("the thing is here we got "+ex+" so plz defined it otherwise you got error and error and error"); //printing error
}
finally{
    console.log("dont worry finally, finally is commig");

}


//creating custom error with throw
try{
       throw "You got an error" //try if we want to do sumoting that migth give error
}
catch(ex){  //passing argument for error 
    console.log("Now we got custom error "+ex); //printing error
}


//using object into try block for throw error

try 
{
   throw{
       Name :"BIG ERORR",
       Number:"101",
   }
}
catch (ex) {
    console.log(ex.Number +"-("+ex.Name+") ");
}

