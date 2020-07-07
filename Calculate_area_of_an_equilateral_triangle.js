const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let a= userInput[0];
let res = (Math.sqrt(3)/4)*(a*a);
console.log(`${res}`);

});
