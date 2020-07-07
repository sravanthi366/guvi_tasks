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
let Area_triangle = (height*base)/2;
console.log(`${Area_triangle}`);

});
