const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let num= userInput[0].split(' ');
let a = num[0];
let b = num[1];

let swap;

swap=a;
a=b;
b=swap;

console.log(`${a} ${b}`);

  


});
