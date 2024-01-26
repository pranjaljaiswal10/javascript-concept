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
   //console.log(b); // Error, Not Defined =>reason:var create seperate scope in function


   {
    var a = 10;
    let b = 20;
    const c = 30;
   }
   console.log(a); // 10 //reason:var not create seperate memory scope for block
   console.log(b); // ReferenceError: b is not defined