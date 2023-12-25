// Date 

let myDate=new Date();   // object instance
console.log(myDate);
console.log(myDate.toString());
// console.log(myDate.toISOString);
// console.log(myDate.toDateString);
// console.log(myDate.toJSON);
// console.log(myDate.toLocaleDateString);
// console.log(myDate.toLocaleTimeString);
// console.log(myDate.toTimeString);

// we can declare a specific date too
let createdDate=new Date(2023,11,25);
// console.log(createdDate);
// console.log(createdDate.toString);
// console.log(createdDate.toDateString);
// console.log(createdDate.toLocaleString);
console.log("Created Date");
let newDate=new Date("2023-12-25");
console.log(newDate);
console.log(newDate.toString);
console.log(newDate.toLocaleString);

// To know Current time stamp 
// can be used in creating pools and games related to time 
console.log("Time Stamp");
let myTimeStamp= Date.now();
console.log(myTimeStamp);
console.log(myTimeStamp.toString);


// More to study from this topic 
