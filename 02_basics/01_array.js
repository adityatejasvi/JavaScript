// Array

const arr=[1,2,3,4,5];
const heros=["Batman","Perman","Superman","Superman"];
const info=["Abhay",15,"Aradhana",13,"Aditya",14];
const grr=new Array(10,20,30,40,50);
console.log(grr);
console.log(arr);
console.log(heros);
console.log(info);
console.log(arr[1]);
// Here in Js we can keep different types of data in an array 
// we can also increase the sixe of given array 
// we can acess array element using index

// Array Methods

arr.push(6);        // To push elements in array
console.log(arr);
arr.push(7);
console.log(arr);
arr.pop();          // To remove elements from the array
console.log(arr);

// we can also place element in array in front but since we have
// to move all the element it is not considerd best

arr.unshift(100);       // This will place the element at top 
console.log(arr);
arr.shift();            // This act as pop for the unshift removes elements from the top
console.log(arr);

// Boolean method in array 
console.log(arr.includes(10));      // To check if the element is in array

console.log(arr.indexOf(4));        // To know the index of the given elements

const nArr=arr.join();      // joins all array elements into string 
console.log(arr);
console.log(typeof arr);
console.log(nArr);
console.log(typeof nArr);

// Slice and Splice

console.log("A",arr);       // here we are printing original array

const sl=arr.slice(1,3);    // outerlimit is not included
console.log(sl);
console.log("B",arr);      // here we are printing our array after slice

const sp=arr.splice(1,3);
console.log(sp);
console.log("C",arr);       // Here we are Printing after splice
 
// Splice changes the original array and includes it outter limit too