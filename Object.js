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

 let user={};
 user["likes birds"]=true;
 alert(user["likes birds"]);
 delete user["likes birds"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Display Data from the Object:
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";

let key = prompt("What do you want to know about the user?", "name");
 alert(users[key]);
let key1="name";
 alert( users.key1 )

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
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


 
 function getGrade(score) {
    if(score===100){
      console.log("A++");
    }else if(score >= 90 && score <= 99){
      console.log("A");
    }else if(score >= 80 && score <= 89){
      console.log("B");
    }else if(score >= 70 && score <= 79){
      console.log("C");
    }else if(score >= 60 && score <= 69){
      console.log("D");
    }else if(score<=59){
      console.log("F");
    }
    else{
    console.log("Absent")
    }
 }

function makeUser(name, age) {
   return {
     name: name,
     age: age,
     // ...other properties
   };

 let user1 = makeUser("John", 30);
 alert(user1.name); 
 
 // for in
 alert("age" in users);

 let user={};
 user["likes birds"]=true;
 alert(user["likes birds"]);
 delete user["likes birds"];
