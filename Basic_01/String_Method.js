// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.


// Length
function getLength(str) {
  console.log("=> Original String:", str); //=> Original String:Hello World
  console.log("=> Length:", str.length); //=> Length:11
}
getLength("Hello World");

// indexOf->return first element index
function findIndexOf(str, target) {
  console.log("=> Original String:", str); //=> Original String:Hello World
  console.log("=> Index:", str.indexOf(target)); //=> Index:7
}
findIndexOf("Hello World", "World"); 

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("=> Original String:", str);  //Original String:Hello World World
  console.log("=> Index:", str.lastIndexOf(target)); //Index:13
}
findLastIndexOf("Hello World World", "World");

// slice->take -`ve value
function getSlice(str, start, end) {
  console.log("=> Original String:", str); //=>Original String:Hello World
  console.log("=> After slice:", str.slice(start, end)); //=> After slice:Hello
}
getSlice("Hello World", 0,5);
 
// substring->not take -ve value
function getSubstring(str, start, end) {
  console.log("=> Original String:", str); //=>Original String:Hello World
  console.log("=> After substring:", str.substring(start, end)); //=>After substring:Hello
}
getSubstring("Hello World", 0, 5);  

// replace
function replaceString(str, target, replacement) {
  console.log("=> Original String:", str); //=> Original String:Hello World
  console.log("=> After replace:", str.replace(target, replacement)); //=> After replace:Hello JavaScript
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("=> Original String:", str); //Original String:Hello World
  console.log("=> After split:", str.split(separator)); //After split:[Hello,World]
}
splitString("Hello World", " ");

// trim->used in form
function trimString(str) {
  console.log("=> Original String:", str); //=> Original String: Hello World
  console.log("=> After trim:", str.trim()); //=> After trim:Hello World
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("=> Original String:", str); //=> Original String:Hello World
  console.log("=> After toUpperCase:", str.toUpperCase()); //=>After to UpperCase:HELLO WORLD 
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("=> Original String:", str); //=> Original String:Hello World
  console.log("=> After toLowerCase:", str.toLowerCase()); //=>After toLowerCase:hellow world
}
toLower("Hello World");
