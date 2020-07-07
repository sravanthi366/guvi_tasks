const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let radius_circle= userInput[0];
let diameter = 2*radius_circle;
let circumference = 2*(Math.PI)*radius_circle;
let Area = (Math.PI)*(Math.pow(radius_circle,2));

console.log(`Diameter is: ${diameter}\nCircumference: ${circumference}\nArea is: ${Area}`);

});
