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
let a = +num[0];
let b = +num[1];
console.log(`sum of two numbers is: ${a+b}\nsubstraction of two numbers is: ${a-b}\nmultiplication is: ${a*b}\ndivision is: ${a/b}\nmodule division is: ${a%b}`);

});
