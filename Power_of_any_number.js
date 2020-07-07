const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let power_of= userInput[0].split(' ');
let a = +power_of[0];
let b = +power_of[1];
let res = Math.pow(a,b);
console.log(`${res}`);

});
