function add(x,y){
    console.log(x+y);
}
function cal(x,y,add){
    add(x,y);
}
cal(3,6,add);

//by using arrow function.
const hiii=()=>{
    console.log("hii");
}
setTimeout(hiii,4000)
