const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let Bating= userInput[0].split(' ');
let run_score = +Bating[0];
let time_out = + Bating[1];
let avg = run_score/time_out;
console.log(`${avg}`);

});
