const fruits = ["Banana", "Orange", "Apple", "Mango"];
// sort 
fruits.sort();
console.log(fruits);

// to string
let str=fruits.toString();
console.log(str);

const num=[10,5,15,20,50,2];
// Number in ascendeng order
num.sort((a,b)=>a-b);
console.log(num);

// Decending order
num.sort((a,b)=>b-a);
console.log(num);

// reverse an array
const num1=[5,20,10,15]
num1.reverse();
console.log(num1);


const arr=[10,20,30,40];

// push Method
// Add Element in End
arr.push(50);
console.log(arr);

// pop Method
// Remove Element in End
arr.pop();
console.log(arr);

// Remove Element in Start
arr.shift();
console.log(arr);

// Add Element in Start
arr.unshift(5);
console.log(arr);

// slice 

let arr1=[1,5,8,10,20]
let arr2=arr1.slice(1,3);
console.log(arr2);

// splice
let ar=[5,12,3,8,55,2];
let ar1=ar.splice(1,2,55,3);
console.log(ar1);
console.log(ar);




