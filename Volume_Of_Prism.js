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
let base = +num[0];
let height = +num[1];
let prism_volume = base*height;
console.log(`${prism_volume}`);

});
