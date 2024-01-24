function square(num) {
  return num * num;
}

function cube(num) {
  return num * num * num;
}

function inputPower(num, power) {
  //Callback fn
  const result = power(num);
  return result;
}
console.log(inputPower(4, cube));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter
function filter(list, filterCn) {
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    if (filterCn(list[i])) {
      //run callback on every item
      newList.push(list[i]);
    }
  }
  return newList;
}

const result = filter(arr, function filterCn(num) {
  return num > 5;
});

// function filterCn(num){
//     return num>5;
// }

// const result=filter(arr,filterCn);

console.log(result);

//Another example of callback
function printStr(str, cb) {
  setTimeout(() => {
    console.log(str);
    cb();
  }, Math.floor(Math.random() * 100) + 1);
}
function printAll() {
  printStr("A", () => {
    printStr("B", () => {
      printStr("C", () => {});
    });
  });
}

printAll();
