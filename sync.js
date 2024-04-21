//synchronous programming.
console.log("hiii");
console.log("bye");
console.log("helloo");    //run the code line by line.


//Asynchronous programming.
console.log("hiii");
console.log("bye");
setTimeout(()=>{
    console.log("this is a settimeout function. ");
},4000) //time in milisecond.
console.log("helloo");


