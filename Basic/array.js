//spread operator;

const arr1=[1,2,3,4],arr2=[5,6,7,8];
const arr3=[...arr1,...arr2];
console.log(arr3);

//destructuring
const [x,y]=[10,20];
console.log(x,y);  //x=10,y=20;
const [a, ,b,...rest]=[1,2,3,5,6,7];
console.log(a,b,rest);


//for in
