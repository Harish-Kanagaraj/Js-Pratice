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
