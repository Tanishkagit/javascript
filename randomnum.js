let ownNumber=parseFloat(prompt("enter value: "));
console.log(ownNumber);
let randomNumber=Math.random();
console.log(randomNumber);
if(randomNumber>ownNumber){
    console.log("random number is greater then your number");
}
else if(randomNumber===ownNumber){
    console.log("random number is equal then your number");
} else{
    console.log("random number is less then your number");
}
