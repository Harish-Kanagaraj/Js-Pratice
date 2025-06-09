let array=[10,25,35,100];
let sum=0;
for(i=0;i<array.length;i++){
    sum+=array[i];
}
console.log(sum);
// Find highest number
console.log(Math.max(...array));

const fruits=["Banana", "Orange", "Apple", "Mango"];
let fruit=fruits[fruits.length - 1];
console.log(fruit);

 fetch('https://jsonplaceholder.typicode.com/todos',{
     method:'POST',
     headers:{'content-type':'application/json'},
     body:JSON.stringify({
       id:1,
       title:"Lourem",
       userId:11,
       completed:false
       })
     })
     .then(response=>response.json())
     .then(json=>console.log(json))
     
 
 fetch('https://jsonplaceholder.typicode.com/todos')
   .then(response => response.json())
   .then(json => {
     json.forEach(todo => {
       document.write(`<p>Title: ${todo.title} </p>`);
     });
   })
   .catch(error => console.error('Error fetching data:', error));
let array=[10,25,35,100];
let sum=0;
for(i=0;i<array.length;i++){
    sum+=array[i];
}
console.log(sum);
let array=[10,25,35,100];
let sum=0;
for(i=0;i<array.length;i++){
    sum+=array[i];
}
console.log(sum);

const fruits=["Banana", "Orange", "Apple", "Mango"];
let fruit=fruits[fruits.length - 1];
console.log(fruit);

fetch('https://jsonplaceholder.typicode.com/todos')
   .then(response => response.json())
   .then(json => {
     json.forEach(todo => {
       document.write(`<p>Title: ${todo.title} </p>`);
     });
   })
let array=[10,25,35,100];
let sum=0;
for(i=0;i<array.length;i++){
    sum+=array[i];
}
console.log(sum);
let key = prompt("What do you want to know about the user?", "name");
 alert(users[key]);
let key1="name";
 alert( users.key1 )
