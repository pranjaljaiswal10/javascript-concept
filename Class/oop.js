const  user={
  username:"Pranjal",
  loginCount:8,
  isLoggedIn:true,
  getUserDetail:function(){
    console.log(this.loginCount)
  }
}
 user.getUserDetail()
 console.log(user.username)
console.log(this)


function User(username,loginCount,isLoggedIn){
 
this.username=username;
this.loginCount=loginCount;
this.isLoggedIn=isLoggedIn;

return this
}


const userOne=new User("hitesh",12,true)
const userTwo= User("Chaicode",11,false)

console.log(userTwo)
