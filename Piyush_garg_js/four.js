const pj = {
  name: "Pranjal Jaiswal",
  sayName: function () {
    console.log(this.name);
  },
};

const jhon = {
  name: "Jhon Doe",
  sayName: function () {
    console.log(this.name);
  },
};

jhon.sayName.call(pj);
