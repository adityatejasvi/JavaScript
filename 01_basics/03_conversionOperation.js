let score =33

console.log(typeof score);

score="33"
console.log(typeof score)

// here we can convert like this too 
let age="20"

console.log(typeof age)

let ageInNumber=Number(age)
console.log(ageInNumber)
console.log(typeof ageInNumber)

// But what if the number is like this in string 
let experience ="15 years"

let experienceInNumber= Number(experience)
console.log(typeof experienceInNumber)
console.log(experienceInNumber)

// Taking null
let victory=null
console.log(typeof null)

let val=Number(victory)
console.log(typeof val)
console.log(val)

// Taking boolean value 
let attacked=true
console.log(typeof attacked)

let casualties=Number(attacked)
console.log(typeof casualties)
console.log(casualties)

// Taking Undefined 
let date=undefined
console.log(typeof date)

let dValue=Number(date)
console.log(typeof dValue)
console.log(dValue)

// "33" => 33
// "33abc"=>NaN (Not a Number)
// true => 1; false=>0
 
//If we convert type in boolean 
// 1=>true; 0=>false
// ""=>fasle
// "Aditya"=>true


// String 
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ***************************** Operations **********************************
console.log("Starting Operation ")
 let value=3
 let negvalue= - value
 console.log(negvalue)

//  console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2**3);
//  console.log(2/3);
//  console.log(2%3);

// Concatination of two string
let str1="Aditya"
let str2=" Pratap"
let str3=str1+str2;
console.log(str3);

console.log("1" +2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(true)
console.log(+true) // Not a good Practice
console.log(+"")   // not a good Practice

let gamecounter=100
gamecounter++;
console.log(gamecounter);

// Here pr-increment and post increment act same but we have to diiferentiate

 