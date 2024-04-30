// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// push()
function pushExample(arr, element) {
  console.log("=> Original Array:", arr); //=> Original Array:[1,2,3]

  arr.push(element);
  console.log("=> After push:", arr); //=> After push:[1,2,3,4]
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
  console.log("=> Original Array:", arr); //=> Original Array:[1,2,3]

  arr.pop();
  console.log("=> After pop:", arr); // => After pop:[1,2]
}
popExample([1, 2, 3]);

// shift()->remove first element
function shiftExample(arr) {
  console.log("=> Original Array:", arr); //=> Original Array:[1,2,3]

  arr.shift();
  console.log("=> After shift:", arr); // After shift:[2,3]
}
shiftExample([1, 2, 3]);

// unshift()->add first element
function unshiftExample(arr, element) {
  console.log("=> Original Array:", arr); //=> Original Array:[1,2,3]

  arr.unshift(element);
  console.log("=> After unshift:", arr); //=> After unshift:[0,1,2,3]
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
  console.log("=> Original Arrays:", arr1, arr2); //=> Original Array:[1,2,3] [4,5,6]

  let arr3 = arr1.concat(arr2);
  console.log("=> After concat:", arr3); //=> After concat:[1,2,3,4,5,6]
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach()
function forEachExample(arr) {
  console.log("=> Original Array:", arr); //=> Original Array:[1,2,3]

  arr.forEach(function (item, index) {
    console.log(item, index); //=> 1 0
    //2 1
    //3 2
  });
}
forEachExample([1, 2, 3]);

// map()
function mapExample(arr) {
  console.log("=> Original Array:", arr); //=> Original Array:[1,2,3]

  let newArr = arr.map(function (item) {
    return item * 2;
  });
  console.log("=> After map:", newArr); //=> After map:[2,4,6]
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
  console.log("=> Original Array:", arr); //=> Original Array:[1,2,3,4,5]

  let newArr = arr.filter(function (item) {
    return item > 3;
  });
  console.log("After filter:", newArr); //=> After filter: [4,5]
}
filterExample([1, 2, 3, 4, 5]);

// find()->return first element of satisfied condtion
function findExample(arr) {
  console.log("=> Original Array:", arr); //=> Original Array:[1,2,3,4,5]

  let found = arr.find(function (item) {
    return item > 3;
  });
  console.log("=> After find:", found); //=> After Find:4
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("=> Original Array:", arr); //=> Original Array:[5,2,3,4,1]

  arr.sort(function (a, b) {
    return a - b;
  });
  console.log("=> After sort:", arr); //=> After sort:[1,2,3,4,5]
}
sortExample([5, 2, 3, 4, 1]);

function sortWord(artists) {
  console.log("=> Original Array:", artists); //=> Original Array:[  'John White Abbott', 'Leonardo da Vinci','Charles Aubry','Anna Atkins',  'Barent Avercamp']
  artists.sort()
  console.log("=> After ascending sort:",artists) //=> After ascending sort:["Anna Atkins","Barent Avercamp", "Charles Aubry", "John White Abbott",  "Leonardo da Vinci"]
  artists.sort((a, b) => a == b ? 0 : a > b ? -1 : 1);
  console.log("=> After descending sort:", artists); //=> After descending sort:["Leonardo da Vinci", "John White Abbott", "Charles Aubry", "Barent Avercamp",    "Anna Atkins"]
   
}
sortWord([
  "John White Abbott",
  "Leonardo da Vinci",
  "Charles Aubry",
  "Anna Atkins",
  "Barent Avercamp",
]);
