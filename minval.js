//write a js code find a minimum number in an array.
const array=[1,7,4,9,10,11,5,2];
function findminvalue(array){
    let minval= Math.min(...array);
    return minval;
}
let minValue=findminvalue(array);
console.log("minimum value is ", minValue);
