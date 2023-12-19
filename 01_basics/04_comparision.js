// console.log(2>1);
// console.log(2<1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2">1);         // will give correct answer coz js converted 
console.log("02">1);        // But this type of conversion doesn't always give predictable answer
console.log("2"==2);
console.log(2=="2");

console.log("null Comparision");
console.log(null > 0);   // false
console.log(null == 0);     //false
console.log(null >= 0);     //true
// The reason is that an equality check == and comparision > ,< ,>= , <=
//work differently.
// Comparisions convert null to a number, treating it as 0.
// That's why (15) null >=0 is true and (13)null >0 is false.


// That's Why we use Strict check ===
// It not only compare but check data types too
console.log("Strict Check ");
console.log("2" === 2);