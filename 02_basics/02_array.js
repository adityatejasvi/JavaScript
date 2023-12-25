const marvel_heros=["Thor","Hulk","Loki"];
const dc_heros=["Flash","BatMan","Superman"];

// here we can use push(), but it will push array as whole in another array
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// We have a better option as concat and spread
// since concat can be used with only 2 elements spread is preffered

const all_heros=marvel_heros.concat(dc_heros);
// Concat combine two or more array and return a new array
console.log(all_heros);

// spraed is used like [...fname,...sname]
const new_hero=[...marvel_heros,...dc_heros];
console.log(new_hero);

// If we are given an array and inside that we have multiple array in deapth 
// we can use 'flat'

const num_Arr=[1,2,3,[4,5,6],7,[8,9[10,11]]];
const simplified_arr=num_Arr.flat(Infinity);
// Returns a new array with all the sub array combined in it
// Infinity can track and resolve any kind of deapth
// but it is not a good practice to put the value as infinity 

// Convert other data into Array

// we can ask too if something is array or not using 
console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya")); // converts into array

// We can also use Array.of() to convert in Array
let s1=100;
let s2=200;
let s3=300;

console.log(Array.of(s1,s2,s3));

