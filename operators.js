let x = 5;
let y = 2;
//Arthimatic Operator
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x>y);

//Assignment Operator
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x+=y);
console.log(x-=y);
console.log(x*=y);
console.log(x/=y);

// Logical Operator
console.log(x&&=y);
console.log(x||=y);
console.log(x!=y);

// Concatenation 
function concatenateStrings(str1, str2) {
    let str=str1+str2;
    console.log(str)
    
}
concatenateStrings("Hello","World!")


function functionname(name){
    console.log("Hello",name)
}
functionname("world")


// Arthematic Operator
let a=10;
let b=5;

let add=a+b;
let sub=a-b;
let mul=a*b;
let div=a/b;
let mod=a%b;
let exp=a**b;

console.log("Addition:"+add);
console.log("Subtraction:"+sub);
console.log("Multiplication:"+mul);
console.log("Division:"+div);
console.log("Modulus:"+mod);
console.log("Exponentiation:"+exp);

// Assignment Operators

let equal = a = b;       // Assign b to a, then a's value is assigned to equal
let plusequal = a += a;  // Adding a to itself (a += a is shorthand for a = a + a)
let subequal = a -= a;   // Subtracting from a (a = a - a)
let mulequal = a *= a;   // Multiplying a by itself (a *= a)

console.log(equal);
console.log(plusequal);
console.log(subequal);
console.log(mulequal);

// Comparison Operator
let comequal= a==b;
let comStrictlyequal= a===b;
let notequal= a!=b;
let notStrictlyequal= a!==b;
let greater= a>b;
let less= a<b;
let greaterequal= a>=b;
let lessequal= a<=b;

console.log(comequal);
console.log(comStrictlyequal);
console.log(notequal);
console.log(notStrictlyequal);
console.log(greater);
console.log(less);
console.log(greaterequal);
console.log(lessequal);

// Logical Operator
let AND = a && b;
let OR = a||b;

console.log(AND);
console.log(OR);

// Predict the output
console.log("5" - 2);           // 3
console.log("5" + 2);           // 52
console.log(true + 2);          // 3
console.log(false == 0);        // true
console.log(null == undefined); //true

 let speed = 100;
 let speedmsg = speed > 80 ? "Overspeeding!" : "Safe driving";
 console.log(speedmsg);

 // variable
 var str="Name";
 console.log(str);

 // type of operator
 let str1="Name";
 console.log(typeof(str1))
 
 let str2=10;
 console.log(typeof(str2))

 //type conversion
 const str3="123";
 let num=Number(str3)
 console.log(typeof(num));


 // Predict the output of this:
 
 // 1)22  -->1st string-->2nd number
 // 2)0   -->   "           "
 // 3)5   --> false=0-->true=1
 // 4)2   --> arithmetic operation JavaScript will attempt to convert the string to a number.
 
 console.log("2" + 2);
 console.log("2" - 2);
 console.log(5 + false);
 console.log(10 / "5");
