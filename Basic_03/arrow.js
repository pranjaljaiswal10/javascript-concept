const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}


user.welcomeMessage()
user.username="sam";
user.welcomeMessage()

console.log(this)// this=current context//{}
//context=value
//in browser this=windows object

function  context(){
    console.log(this)
}

context()

function usernameInfo(){
    let username="Pranjal"
    console.log(this.username);//undefined b/c this work on object
}

usernameInfo()

const usernameIn=()=>{
    let username="Pranjal"
    console.log(this);
}
usernameIn();

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

// const addTwo = (num1,num2)=>num1+num2;

const addTwo = (num1,num2)=>(num1+num2);

// const addTwo = (num1,num2)=>({username:"Pranjal"})

console.log(addTwo(3,4))