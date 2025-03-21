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
