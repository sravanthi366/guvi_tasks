console.log("hello world")

// 1. Declare four variables without assigning values and print them in console.

let name;
let age;
let m_status;
let nation;
console.log(name, age,m_status,nation);


// 2. How to get value of the variable myvar as output.
/*
var myvar= 1;
console.log("myvar");*/

var myvar= 1;
console.log("myvar");

console.log(myvar);         // if you want to get the value of mavar.


// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines

let first_name = "Sravanthi";
let last_name = "Boddu";
let marital_status = "Married";
let country = "India";
let age_ = 25;

// 4 .Declare variables to store your first name, last name, marital status, country and age in a single line

let first_name_ = "Sravanthi", last_name_ = "Boddu",marital_status_ = "Married",country_ = "India",age__ = 25;

// 5. Declare variables and assign string, boolean, undefined and null data types

//I am 25 years old. 
//You are 30 years old.

let str1 = "I am 25 years old."
let bool = true;
let undef;
let nul_val = null;


 /* 6. Convert the string to integer
parseInt()
Number()
Plus sign(+)*/

let str = "20";
let int_val = parseInt(str);
let num_val = Number(str);
let p_val = +str;
console.log(typeof(p_val));
console.log(typeof(int_val));
console.log(typeof(num_val));


//  7. Write 6 statement which provide truthy & falsey values.

'N'=='n' //False
1<=10   //False
5===5  // True
4!=5   //True
6>2     //True
5>=6    //False

