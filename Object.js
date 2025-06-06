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

  function counter (count) {
     console.log(count);
     if(count > 1){
         count = count-1;
         counter(count);
     }else{
         return;
     };
 };
 counter(5)

 let user={};
 user["likes birds"]=true;
 alert(user["likes birds"]);
 delete user["likes birds"];

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

 const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};


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
  let user={};
 user["likes birds"]=true;
 alert(user["likes birds"]);
 delete user["likes birds"];

       const price = 100; 
const taxRate = 0.08; 

const total=price+(price*taxRate);
console.log(total)

//Print First 5 numbers

for(let i=0;i<=5;i++){
    console.log(i);
}

for(let i=5;i>=0;i--){
    console.log(i)
}

       function concatenateStrings(str1, str2) {
    let str=str1+str2;
    console.log(str)
    
}
concatenateStrings("Hello","World!")
 let key = prompt("What do you want to know about the user?", "name");
 alert(users[key]);
let key1="name";
 alert( users.key1 )
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthService.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;

let pos=fruits.at(2);
let pos1 = fruits[2];
console.log(pos);
console.log(pos1);

let array=[10,25,35,100];
let sum=0;
for(i=0;i<array.length;i++){
    sum+=array[i];
}
console.log(sum);
// Find highest number
console.log(Math.max(...array));


  function Person(first, last, age, eye) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.eyeColor = eye;
 }
 
 
 const myFather = new Person("John", "Doe", 50, "blue");
 document.getElementById("demo").innerHTML =
 "My father is " + myFather.age + "."; 
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

let key = prompt("What do you want to know about the user?", "name");
 alert(users[key]);
let key1="name";
 alert( users.key1 )

let user={};
 user["likes birds"]=true;
 alert(user["likes birds"]);
 delete user["likes birds"];
let key = prompt("What do you want to know about the user?", "name");
 alert(users[key]);
let key1="name";
 alert( users.key1 )

let object={
     for:1,
     let:2,
     return:3,
 }
 alert(object.for+object.let+object.return);
