const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let a= userInput[0].split(' ');
let base = +a[0];
let height = + a[1];
let area = (base*height)/2;
console.log(`${area}`);

});
