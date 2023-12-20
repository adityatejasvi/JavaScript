const name="Aditya";
const repoCount=3;

//console.log("My name is " +name +" i have"+ repoCount);     // not a good Practice

// instead of using this we can use backcast

console.log(`My name is ${name} and my repo count is ${repoCount}`);

// Strings can be created as primitives, from string literals, or as objects, using the String() constructor:

const username= new String("onenonine");
console.log(username.__proto__);
// Character Access => Two ways 
//When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed

console.table([name.charAt(4), name[2]]);

//Using methods of object
console.log(username.length);
console.log(username.toUpperCase);