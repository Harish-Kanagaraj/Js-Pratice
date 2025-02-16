let array=[10,25,35,100];
let sum=0;
for(i=0;i<array.length;i++){
    sum+=array[i];
}
console.log(sum);
// Find highest number
console.log(Math.max(...array));