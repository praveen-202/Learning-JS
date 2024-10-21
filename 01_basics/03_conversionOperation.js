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
// console.log(booleanIsLoogedIn);

//1 => true; 0 => false
//"" => false
//"praveen" =>true

// >1 => true

// Conversion into String-------------------------

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

//*********Operations********************* */
let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);// 2 to the Power Of 3
// console.log(2/3);
// console.log(2%3);

// let str1 = "hello"
// let str2 = "Praveen"
// let str3 = str1+str2 //string concates
// console.log(str3);


// console.log("1"+2);
// console.log(1+"2");
// console.log("1" + 2 + 2); //122
// console.log(1+ 2 + "2");  //32

// console.log(-true);//-1
// console.log(+true);//1
// console.log("");//output will be black space
// console.log("");//0
// console.log(-"");//-0

let num1, num2, num3
num1 = num2 = num3 = 2+2
// console.log(num3);
// console.log(num2);
// console.log(num1);

let gameCounter = 100
++gameCounter;
// gameCounter++;

console.log(gameCounter)//with both its 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
