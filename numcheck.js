//javascript Program to Check if a number is Positive, Negative, or Zero.
function numcheck(){
    let number=parseInt(prompt("please enter number: "));
    if(number > 0){
        console.log("number is positive");
    }
    else if(number === 0){
        console.log("number is zero");
    }
    else{
        console.log("number is negative");
    }
}
numcheck();