const number=400;
console.log(typeof number);
// here js converted it into string

// we can also declare numbers explicitly

const balance=new Number(100);
console.log(typeof balance);

// since this is an object we can use sevral mathods on it 
console.log(balance.toString()); // converted into string
console.log(balance.toString().length);

const nums=123.8464
console.log(nums.toPrecision(4)); // here value inside precision is must

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')); // it gives USD default value
// so we have used 'en-IN' to represent in indian value


// +++++++++++++++++++++++++  Maths ++++++++++++++++++++

console.log(Math);
console.log(typeof Math);
console.log(Math.abs(-19)); // Gives absolute value that is in positive value
console.log(Math.round(4.8767));
console.log(Math.ceil(4.8767));  // gives top value
console.log(Math.floor(4.8767)); // gives bottom value

console.log(Math.max(4,3,2,5,4,4.5,5.5));
console.log(Math.min(1.1,2.3,4,5,7));

// But we use maths mostly in generating random value
console.log("We are using random method here");
console.log(Math.random()); // ranges between 0 to 1

// Since mostly we need numbers between a particular min and max value so
const min=10
const max=20
console.log(Math.floor(Math.random() * (max- min + 1))+ min);
// Using this pattern we can make random numbers between given limits easily