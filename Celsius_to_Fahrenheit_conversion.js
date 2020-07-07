const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let temp= userInput[0];
let cToFahr = temp * 9 / 5 + 32;
console.log(`${cToFahr}`);

});
