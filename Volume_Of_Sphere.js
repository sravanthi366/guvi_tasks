const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let r= userInput[0];
let volume =4/3*(Math.PI)*(Math.pow(r,3));
console.log(`${volume}`);

});
