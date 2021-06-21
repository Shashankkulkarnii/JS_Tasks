var ary =  [0, 2, 4, 6, 8, 10, 12, 14, 16];

// every element being twice of elements in the current list.
var twice = (ele)=> ele*2;
var twicelist = ary.map(twice);
console.log(twicelist);

//every element being half of the elements in the current list.
var half = (ele)=>ele/2;
var halflist = ary.map(half);
console.log(halflist);