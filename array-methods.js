// Find Last Value
const fruits=["Banana", "Orange", "Apple", "Mango"];
let fruit=fruits[fruits.length - 1];
console.log(fruit);

// Find Array length
let size = fruits.length;
console.log(size);

// Array to string
let str=fruits.toString();
console.log(str);

// Array at()  
let pos=fruits.at(2);
let pos1 = fruits[2];
console.log(pos);
console.log(pos1);

// Array join()
let add=fruits.join('+');
console.log(add);

// pop remove in end
let remove=fruits.pop();
console.log(remove);

// push add in end
let add1=fruits.push("Kiwi");
console.log(add1);
console.log(fruits);

// shift() remove in start
let remove1=fruits.shift();
console.log(remove1);
console.log(fruits);

// unshift() add in start
let add2=fruits.unshift("Lemon");
console.log(add2);
console.log(fruits);

// shift() method removes the first array element and "shifts" all other elements to a lower index
let change=fruits.shift();
console.log(change);
console.log(fruits);

// Array Concat
let arr=["snow"];
let arr1=["ball"];
let adding=arr.concat(arr1);
console.log(adding);




