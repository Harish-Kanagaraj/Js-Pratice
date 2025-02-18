// Even Number
for(let i=2;i<=10;i+=2){
    console.log(i);
}

for(let i=2;i<=10;i++){
    if(i%2===0){
        console.log(i);
    }
}
// Odd Number 
for(let i=2;i<=10;i++){
    if(i%2===1){
        console.log(i);
    }
}


// Reverse an array
let num=[10,12,15,20]; 
num.reverse();
console.log(num);

// return negative numbers from array

let  arr=[10,-1,-5,-20,50,-15,20];

for(let i=0;i<arr.length;i++){
    if(arr[i]<=0){
        console.log(arr[i]);
    }
}

