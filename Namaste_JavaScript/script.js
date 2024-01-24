console.log(x)//undefined
var x=10;
console.log(x)//10
// console.log(a)// ReferenceError:a is not defined

function a() {
    var b = 10;
    c();
    function c() {
    console.log(b); // 10
    }
   }
   a();
   //console.log(b); // Error, Not Defined