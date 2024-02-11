//swapping two values without using third variable.
let x=9;
let y=10;
console.log(`before swapping x is ${x}`);
console.log(`before swapping y is ${y}`);
x=x+y; // 9+10=19(x=19)
y=x-y; // 19-10=9(y=9)
x=x-y; // 19-9=10(x=10)
console.log(`after swapping x is ${x}`);
console.log(`after swapping y is ${y}`);

//swap using third variable.
let x=2;
let y=5;
let c;
console.log(`before swapping x is ${x}`);
console.log(`before swapping y is ${y}`);
c=x; // c=2
x=y; // x=5
y=c; // y=2
console.log(`after swapping x is ${x}`);
console.log(`after swapping y is ${y}`);

//swap using bitwise OR.
let x=2;
let y=3;
console.log(`before swapping x is ${x}`);
console.log(`before swapping y is ${y}`);
x=x^y; // x=0010^0011=0001(1)
y=x^y; // y=0001^0011=0010(2)
x=x^y; //x=0001^0010=0011(3)
console.log(`after swapping x is ${x}`);
console.log(`after swapping y is ${y}`);
