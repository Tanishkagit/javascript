let year=parseInt(prompt("enter year: "));
if(year%4===0){
    if(year%400===0  || year%100!==0){
        console.log(`${year} is a leap year.`); 
    }

}
else{
    console.log(`${year} is not a leap year.`);
}