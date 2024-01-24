getName(); // Pranjal Jaiswal
console.log(x); // undefined
var x = 7;
function getName() {
console.log("Pranjal Jaiswal")
}

getName(); // TypeError: getName is not a function
console.log(getName);
var getName = function () {
 console.log("Pranjal Jaiswal");
};
