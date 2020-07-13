const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("close", () => {
  var input = [
["0001", "Roman Alamsyah", "Bandar Lampun", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
console.log(input[i]);
}
}
dataHandling(input);
 
 
});
