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
function dataHandling(input,name){
for (var i = 0; i < input.length; i++) {
    if(input[i]==name)
    return "found";
}
}
let found = dataHandling(friends ,"Munnabai");
console.log(found);

});

