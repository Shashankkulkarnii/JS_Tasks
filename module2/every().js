var ispositive = (element, index, array) => {
    return element > 0;
}


    var arr = [11, 89, 23, 7, 98];

    // Check for positive number
    var value = arr.every(ispositive);
    console.log(value);

    var greater2 =(ele)=>{ //checking element greater then 2 or not eith every method
        return ele >2;
    }
    var op =arr.every(greater2);
    console.log(op);