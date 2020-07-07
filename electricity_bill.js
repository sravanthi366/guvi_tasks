const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let unit_rate = userInput[0];
let power_month = 100*24*30;
//1 unit = 1kwatts
let unit = power_month/1000;
let energy_bill = unit*unit_rate;
console.log(`${energy_bill}`);


});
