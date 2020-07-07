const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

let grade_points = userInput[0].split(' ');
let sub_1 = +grade_points[0];
let sub_2 = +grade_points[1];
let sub_3 = +grade_points[2];
let sub_4 = +grade_points[3];
let sub_5 = +grade_points[4];

let CGPA = (sub_1+sub_2+sub_3+sub_4+sub_5)/5;
console.log(CGPA);


});
