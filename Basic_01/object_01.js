//object constructor
// const user=new Object;

//Object literal
const user={}
user.name="Pranjal";
user.age=23;
user.location="Bharwari"
console.log(user)




// const user={
//     name:"Pranjal",
//     "full name":"Pranjal Jaiswal"
// }
// console.log(user[fullName]);

//Optional chaining(?.) operator
const userDetail={
    name:"Pranjal",
    age:23,
    address:{
        landmark:"Mona Fridge & Electronics",
        street:"Bus Stop",
        town:"Bharwari"
    },
    print(){
    console.log(this.name)
    }
}
console.log(userDetail?.address?.district);
console.log(userDetail?.address?.town);
