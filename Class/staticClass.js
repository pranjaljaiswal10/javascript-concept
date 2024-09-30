class User {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(`username is ${this.username}`);
  }

  static createId(){
   return 123 
  }
}

class Teacher extends User{
      constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
      }
}

const pranjal=new User("Pranjal")
console.log(User.createId())

const mam=new Teacher("mam","mam@gmail.com","246")
console.log(mam.createId())