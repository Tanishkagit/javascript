
function add(x,y){
    console.log(x+y);
    console.log("hello");
}
function cal(x,y,add){
    add(x,y);
}
cal(3,6,add);

//by using arrow function.
const hiii=()=>{
    console.log("hii");
    console.log("hello");
}
setTimeout(hiii,4000)
