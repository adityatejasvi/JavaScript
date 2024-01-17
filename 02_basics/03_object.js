// singleton (through constructor method)
// in this object are created uniquely
// object.create

// How to use key if we are using "Symbol"
const mySym=Symbol("key1")
//symbol key is taken differently in javaScript
// if it is used as others it will act as another string but not Symbol

const JsUser ={
    name:"Aditya",
    "fullname":"Aditya Pratap Tejasvi",
    [mySym]:"mykey1",
    "school name":"manav Bhumi",
    email:"adi@gmail.com",
    isLoggedIn:false,
    lastLoggin:["Monday","saturday"]
}
// here all the keys are by default Strings we can also take keys as numbers
// Method to access obj
console.log(JsUser.name);
console.log(JsUser["name"]);
// mostly dot method is used but in some cases we use bracket method
// we can't access variable name having white spaces ex"School Name" using dot method
console.log(JsUser["fullname"]);
console.log(JsUser.fullname);
// here manav bhumi can't be accessed using "dot" method
console.log(JsUser["school name"]);

// to display val of symbol
console.log(JsUser[mySym]);

//to make changes in object
JsUser.email="aditya$mail.com"
console.log(JsUser.email)

// we can freeze an object too so that no changes can be made
// Object.freeze(JsUser)

// function can be declared normally in java

JsUser.greeting = function(){
    console.log("Hello")
}
console.log(JsUser.greeting()) // will do what is meant to do
console.log(JsUser.greeting);   // returns a function

JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`)
}
// Here "this" refers current object 

console.log(JsUser.greeting2());