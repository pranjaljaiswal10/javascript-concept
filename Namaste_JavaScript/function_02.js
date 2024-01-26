printName();
// printFullName() // => TypeError:printFullName is not a function


//Functional Statement
function printName(){
    console.log(`Pranjal`);
}

//Function Expresion
var printFullName=function (){
    console.log(`Pranjal Jaiswal`)
}

//Anonymous Function
// function (){

// } // =>Suntax Error:Function Statment require function Name

//Named Function Expression
var b= function xyz() {
  console.log(`b is called`)
}
b() // =>b is called
// xyz(); // => Referencerror: xyz is not defined
//reason: xyzn is not created in functional scope

//HOF(Higher Order Function)
//function passed as an argument
var b = function (fn){
    console.log(fn)
}
b(()=>{} )

//return as a function in a another fn;
var c = function (){
    return ()=>{}
}
console.log(c());

