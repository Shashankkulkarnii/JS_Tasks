var buffer1 = new ArrayBuffer(16);
var view1 = new Int8Array(buffer1);// -128 -127
console.log(view1.length);
console.log(view1.byteLength);
view1[0]=-128;
view1[1]=127;
for (const num of view1) {
    console.log(num);
}

console.log("Unit8Array");
var buffer2 = new ArrayBuffer(16);
var view2 = new Uint8Array(buffer2);// 0 - 255
console.log(view2.length);
view2[0]=0;
view2[1]=255
view2.forEach(ele => {
console.log(ele);    
});


console.log("Uint8ClampedArray");
var buffer3 = new ArrayBuffer(16);
var view3 = new Uint8ClampedArray(buffer3);// 0 - 255 clamped
console.log(view3.length);
view3[0]=0;
view3[1]=255;
view3.forEach(ele => {
console.log(ele);    
});

console.log("Int16Array");
var buffer4 = new ArrayBuffer(16);
var view4 = new Int16Array(buffer4);// 0 - 255 clamped
console.log(view4.length);
view4[0]=-32768;
view4[1]=32767;
view4.forEach(ele => {
console.log(ele);    
});


console.log("Uint16ArrayInt16Array");
var buffer5 = new ArrayBuffer(16);
var view5 = new Uint16Array(buffer5);// 0 - 255 clamped
console.log(view5.length);
view5[0]=0;
view5[1]=65535;
view5.forEach(ele => {
console.log(ele);    
});


console.log("Int32Array");
var buffer6 = new ArrayBuffer(16);
var view6 = new Int32Array(buffer6);// 0 - 255 clamped
console.log(view5.length);
view6[0]=-2147483648;
view6[1]=2147483647;
view6.forEach(ele => {
console.log(ele);    
});

