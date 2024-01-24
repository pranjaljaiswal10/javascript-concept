var x = 1; //Call Stack:[GEC]
a();// Call Stack:[GEC,a()]
//After printing x:Call Stack:[GEC]
b();//Call  Stack:[GEC,b()]
// After printing another different value of x:[GEC]
console.log(x);
function a() {
 var x = 10; // local scope because of separate execution context
 console.log(x);
}
function b() {
 var x = 100;
 console.log(x);
}

/*
Output:
10
100
1
*/
