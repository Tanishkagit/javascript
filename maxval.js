//write a js code find a maximum number in an array.
const array=[1,7,4,9,10,11,5,2];
function findmaxvalue(array){
    let maxval= Math.max(...array);
    return maxval;
}
let maxValue=findmaxvalue(array);
console.log("maximum value is ", maxValue);
