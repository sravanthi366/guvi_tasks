const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{
let strArry = userInput[0].split(' ');

let res =[];

//console.log(strArry);

    
    for (let i=0; i<strArry.length-1; i++){
        
        
        let val = strArry[i];
        
        res.push(val);
           
        }
        console.log(res.join(','));
    

});
