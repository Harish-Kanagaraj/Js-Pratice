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

// Array concat with value
let adding1=arr.concat("fall");
console.log(adding1);

// copyWithin()  Copy to index 2, all elements from index 0:
// first Display the first 2 number and  second value show the index value
let copy= fruits.copyWithin(2,2);
console.log(copy);

// flat() -- creates a new array with sub-array elements
let farr=[[1,2],[3,4],[5,6]];;
let farr1=farr.flat();
console.log(farr1);

// splice Method  add 
// 1 value where need to add 2nd how many element need to delete 3 rd new element to add
console.log(fruits);
fruits.splice(1,0,"Lemon");
console.log(fruits);

// using splice to remove data
fruits.splice(0,1);
console.log(fruits);

// toSpliced() same as splice  new method creates a new array, keeping the original array unchanged
const month=["jan","feb","Mar","Apr"];
let spliced=month.toSpliced(0,1);
console.log(spliced);

// slice() 
// slices out a piece of an array into a new array
const months=["jan","feb","Mar","Apr"];
let slice=months.slice(2);
console.log(slice);



