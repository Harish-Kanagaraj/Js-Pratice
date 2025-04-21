let user={};
 user["likes birds"]=true;
 alert(user["likes birds"]);
 delete user["likes birds"];
let users={
     name:"john",
     age:30,
 };

 let key = prompt("What do you want to know about the user?", "name");
 alert(users[key]);
let key1="name";
 alert( users.key1 )

function makeUser(name, age) {
   return {
     name: name,
     age: age,
     // ...other properties
   };
}
let user1 = makeUser("John", 30);
 alert(user1.name); 
 
 // for in
 alert("age" in users);

let object={
     for:1,
     let:2,
     return:3,
 }
 alert(object.for+object.let+object.return);

let obj={
     0:"test",
 };
 alert(obj["0"]);
 alert(obj[0]);

let user2 = {
   name: "John",
   age: 30
 };
 
 user2.sayHi = function() {
   alert("Hello!");
 };


