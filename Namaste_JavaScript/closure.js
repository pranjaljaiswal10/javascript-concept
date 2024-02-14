// without closures
var count = 0;
function increment(){
 count++;
}
// in the above code, anyone can access count and change it.
//------------------------------------------------------------------
// (with closures) -> put everything into a function
function counter() {
 var count = 0;
 function increment(){
 count++;
 }
}
console.log(count); // this will give referenceError as count can't be accessed. So now we
//are able to achieve hiding of data
//----------------------------------------------------------------
//(increment with function using closure) true function
function counter() {
 var count = 0;
 return function increment(){
 count++;
 console.log(count);
 }
}
var counter1 = counter(); //counter function has closure with count var.
counter1(); // increments counter
var counter2 = counter();
counter2(); // here counter2 is whole new copy of counter function and it wont impack the
//output of counter1
//*************************
// Above code is not good and scalable for say, when you plan to implement decrement
//counter at a later stage.
// To address this issue, we use *constructors*
// Adding decrement counter and refactoring code:
function Counter() {
//constructor function. Good coding would be to capitalize first letter of constructor
 var count = 0;
 this.incrementCounter = function() { //anonymous function
 count++;
 console.log(count);
 }
 this.decrementCounter = function() {

 count--;
 console.log(count);
 }
}
var counter1 = new Counter(); // new keyword for constructor fun
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
// returns 1 2 