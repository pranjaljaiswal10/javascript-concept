const pj = {
  name: "Pranjal Jaiswal",
  sayName: function () {
    console.log(this.name);
  },
};

// setTimeout(pj.sayName,3*1000)
setTimeout(pj.sayName.bind(pj), 3 * 1000);
