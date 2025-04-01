 // Array Search 
 // Index of() Method
 const fruits=["Apple", "Orange", "Apple", "Mango"];
 let position=fruits.indexOf("Orange")+1;
 console.log(position)
 // last Index of() Method
 let position1=fruits.lastIndexOf("Apple")+1;
 console.log(position1);

// includes()   -- check if an element is present
 let position2=fruits.includes("Apple");
 console.log(position2);

 // Date
 const d = new Date();
 console.log(d.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

 // find()
 const array1 = [5, 12, 8, 130, 44];
 const found = array1.find((element) => element > 10);
 console.log(found);

 // findIndex()
 const isLargeNumber = (element) => element > 13;
 console.log(array1.findIndex(isLargeNumber));

 // for of  with an array
 const number=[10,20,30,40,50];
 for(let num of number){
     console.log(num)
 }

 // for of with an string
 const str="Hello";
 for(let char of str){
     console.log(char);
 }

 // for of with an set
 const set = new Set([1,2,3,4]);
 for(let value of set){
     console.log(value);
 }

// for of with Map
 const map=new Map([
      ['name', 'Alice'],
      ['age', 25],
      ['city', 'New York']
 ]);
 for(let [key,value] of map){
     console.log((key,value));
 }

 // for in
 const person = {
   name: 'Alice',
   age: 30,
   city: 'New York'
 };

 // for in array
 const color=['red' , 'yellow' , 'green'];
 for(let index in color){
     console.log(index);
     console.log(color[index])
 }

// if-else
 let age = 20
 if (age >= 18) {
     console.log("Eligible for vote")
 } else {
     console.log("Not Eligible for vote")
 }

// Nested if
 let score = 90;
 if (score > 50) {
     console.log("You Got Passed");
     if (score > 80) {
         console.log("you got A Grade")
     }
 } else {
     console.log("you Failed")
 }

 // Ternary Operator
 let age1 = 16;
 let message = age1 >= 18 ? "Elegiable for vote" : "Not Eligible for vote";
 console.log(message)

 // Another Method
 let isLoggedIn = false;
 console.log(isLoggedIn === "true" ? "Welcome Back" : "Please Login");

// Switch Statement
 let day = 3;
 switch (day) {
     case 1:
         console.log("Monday");
         break;
     case 2:
         console.log("Tuesday");
         break;
     case 3:
         console.log("Wednesday");
         break;
     default:
         console.log("Invalid Day");
 }

 // Logical Operators in Conditions
 // AND 
 
 let Logage = 25;
 let hasID = true;
 if (Logage >= 18 && hasID) {
     console.log("Allowed to Enter");
 } else {
     console.log("Not Allowed");
 }
 //OR
 let isMember = false;
 let hasDiscountcoupen = true;
 if (isMember || hasDiscountcoupen) {
     console.log("You Get a Discount");
 } else {
     console.log("No Discount");
 }

 //1)Write an if-else statement that checks if a number is positive, negative, or zero.
 
 let num = 2;
 
 if (num > 0) {
     console.log("The Number is Positive")
 } else if (num < 0) {
     console.log("The Number is Negative")
 } else {
     console.log("The Number is Zero")
 }

 //2)Convert this if-else to a ternary operator:
  let speed = 100;
  if (speed > 80) {
   console.log("Overspeeding!");
} else {
    console.log("Safe driving.");
 }



