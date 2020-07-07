const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let meter= userInput[0];
let miles = meter*0.00062137;
console.log(`${miles}`);

});
