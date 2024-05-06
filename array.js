//array queation to calculate average of marks....
let array= [85,97,44,37,76,60];
let ary;
let sum=0;
let avg;
for(ary of array){
    console.log(ary);
    sum=sum+ary;
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

//we have array of marks.fiter out marks of student who have 90+.
let marks=[40,80,98,96,94,34,57,69,79];
let filtermarks=marks.filter((val)=>{
    return val>90;});
console.log(filtermarks);
