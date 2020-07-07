const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let s_interest= userInput[0].split(' ');
let p = +s_interest[0];
let t = +s_interest[1];
let r = +s_interest[2];
let res = (p*t*r)/100;
console.log(`${res}`);

});
