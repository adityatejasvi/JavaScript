// On the basis of how a data is stored and accesed we have two types of data types
// Primitive and non-primitive

// 1. Primitive (7 types) all of this are call by value
// String,Number,Boolean,null,undefined,Symbol(used to make unique),BigInt
 // $$$$ Using Symbol $$$
 let id=Symbol('123');
 let anotherId=Symbol('123');
 console.log(id == anotherId);


// *** Js is Dynamically-typed language

//2. Reference Type (Non-Primitive)
// Array, Objects,Functions

const heros=["Shaktiman","naagraj","doga"];

let myObj={
    name:"Aditya",
    age:20,
}

const fun= function(){
    console.log("Hello Aditya");
}
 
// Stack (Primitive)  Heap(Non-Primitive)

let myName="Aditya";
let anotherName=myName;

console.log(myName);
console.log(anotherName);

anotherName="Tejasvi"

console.log(myName);
console.log(anotherName);

let u1={
    userName:"Madithya",
    userMail:"xyz@gmail.com",
}

let u2=u1;
u2.userMail="cello@gmail.com";

console.log(u2.userMail);
console.log(u1.userMail);