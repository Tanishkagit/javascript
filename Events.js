//EVENTS IN JS
node.event= ()=>{
//.............
}

//Event objects
Node.event = (evt) =>{
    //............
}

/*example:-

let button=document.querySelector(".btn")     // in html code we have a class (btn)
button.onclick=()=>{
console.log("this is a button");
}*/

//js for changemode. 
let button=document.querySelector(".btn");
let mode="light";
button.addEventListener("click",()=>{
  if(mode==="light"){
    mode="dark";
    document.querySelector("body").style.backgroundColor="black";
  }
  else{
    mode="light"
    document.querySelector("body").style.backgroundColor="white";
  }
})

