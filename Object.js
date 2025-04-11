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
