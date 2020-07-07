const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let num= userInput[0].split(' ');
let price = +num[0];
let s_cost = +num[1];
let dis_product = price-s_cost;
let dis_rate = (dis_product/price)*100;

console.log(`Discount of product is: ${dis_product}\nDiscount rate is: ${dis_rate}`);

});
