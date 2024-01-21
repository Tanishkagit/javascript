//array queation to calculate average of marks.
let array= [85,97,44,37,76,60];
let arr;
let sum=0;
let avg;
for(arr of array){
    console.log(arr);
    sum=sum+arr;
}
console.log(sum);
avg=sum/array.length;
console.log(avg);

//array queation related to array methods.
let companies= ["bloomberg","microsoft","uber","google","IBM","netflix"];
companies.shift();
console.log(companies);
companies.splice(1,1,"ola");
console.log(companies);
companies.push("amazon");
console.log(companies);
