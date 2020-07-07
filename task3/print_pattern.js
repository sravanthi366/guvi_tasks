const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{


    
    for (let i=1; i<=7; i++){
        let str='';
        for (let j=1; j<=i;j++){
            str += "#";
           
        }
        console.log(str);
    }

});
