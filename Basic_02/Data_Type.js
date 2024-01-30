//null =>standalone value or absence of object value
//undefined =>
//symbol => unique

console.log(typeof(undefined)) //object
console.log(typeof(null)) //object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack:Primitive Heap(Non-Primitive)
let myName = "Pranjal Jaiswal"
let anotherName = myName;
anotherName = "PJ"; 

console.log(anotherName); //=>PJ
console.log(myName)  //Pranjal Jaiswal

let userOne={
    email:"pranjaljaiswal35@gmail.com",
    upi:"pranjaljaiswal@ybl.com"
}

let userTwo=userOne;
userOne.email="jaiswalpranjal567@gmail.com"
console.log(userOne.email,userTwo.email)
