let reg = /shank/;//normal exp
let reg1 = /shank/g;//if we use g its global exp with this we find exp multiple times
let reg2 = /shank/i;//with this we can serch insensitivly 
let str = "Hello iam shank and shank";
let str2 = "Hello iam ShAnk and shank";
let result = reg.exec(str);//exec function help to search
console.log(result);//printing only first shank
console.log(reg1.exec(str)); //with g we got first shank on 10 index
console.log(reg1.exec(str));//and now we got shank on index 20
console.log(reg2.exec(str));//here we search insensitive
console.log(reg.test(str));//its return true or false if stings finds or not with test ()
console.log(str.match(reg));//if found so its return ary with info or if not its return null
console.log(str2.match(reg1));//if found so its return ary with info or if not its return null
console.log(str.search(reg));//if found so its return index or if not its return -1
console.log(str.replace(reg,"shubham"));//if found so its return index or if not its return -1
console.log(str.replace(reg1,"shubham"));//if found so its return index or if not its return -1
console.log(str.replace(reg1,"shubham"));//if found so its return index or if not its return -1