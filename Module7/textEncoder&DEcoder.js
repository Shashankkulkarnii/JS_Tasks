const encoder = new TextEncoder();
const view1 = encoder.encode("€");  //encoder return encoded values
console.log(view1);

const decoder = new TextDecoder();
const view2 = decoder.decode(view1);//decoder return decoded msg
console.log(view2);