const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let test_score= userInput[0].split(' ');
let a = +test_score[0];
let b = +test_score[1];
let c= +test_score[2];
let d=+test_score[3];
let e= +test_score[4];
let avg = (a+b+c+d+e)/5;
console.log(`${avg}`);

});
