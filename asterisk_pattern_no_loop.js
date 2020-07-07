const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

console.log(`* * * * * \n* * * * *`);

console.log(`* * * * *`);
console.log(`* * * * *`);
console.log(`* * * * *`);


});
