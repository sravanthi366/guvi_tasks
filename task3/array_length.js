const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{
let strArry = userInput[0].split(',');
console.log(strArry);


let count=0;

for(let i=0; strArry[i]!=undefined; i++){
    count++;

    
}
console.log(count);

});
