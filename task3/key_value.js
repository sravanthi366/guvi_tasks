const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
 
});
inp.on("close", () => {
let myobject = {1:"one","11":1,"name":"arun"};

myobject.ten = "ten";

console.log(myobject);

});
