const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let pound= userInput[0];
let kilo = pound/2.2046;
console.log(`${kilo}`);

});
