// let score = "33aa" // "123ab"-NaN | null-0 | 123-number | undefine-NaN | NaN-NaN | true-1 | "Praveen - NaN"
let score = "123ff" //op: 0
// console.log(typeof score)
// console.log(typeof (score))

//Conversion into Number()-----------
let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33aa" => NaN
// true => 1; false => 0

// Conversion into Boolean---------------------
let isLoggedIn = 1

let booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(booleanIsLoogedIn);

//1 => true; 0 => false
//"" => false
//"praveen" =>true

// >1 => true

// Conversion into String-------------------------

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

