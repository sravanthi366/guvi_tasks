const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let friends = [
                "Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    if(i==0){
        input.unshift('Munnabai');
    }
    if (i==3)
    break;
console.log(input[i]);
}
}
dataHandling(friends);


});

