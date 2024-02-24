var fullName = "Pranjal Jaiswal";

var obj = {
  fullName: "Hacked Full Name",
  prop: {
    fullName: "Inside Props",

    getFullName: function () {
      return this.fullName;
    },
  },

  getFullName: function () {
    return this.fullName;
  },

  getFullNameV2: () => this.fullName,

  getFullNameV3: (function () {
    return this.fullName;
  })(),
};

console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullNameV2());
console.log(obj.getFullNameV3());
