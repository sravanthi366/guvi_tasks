const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", ()=>{
    
var friends1 = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
var friends2 = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];
function dataHandling(input1,input2){
    
    let oneArr = (input1.concat(input2)).sort();
    let name_begin = oneArr.push('Sravanthi');
    let neme_end= oneArr.unshift('Anusha');
    console.log(oneArr.toString());

}
dataHandling(friends1,friends2);

});

