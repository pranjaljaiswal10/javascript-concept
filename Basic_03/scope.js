var c=300;
let a=300;
if(true){
    let a=20;
    const b=20;
    console.log("INNER: ",a)
}

console.log(a)//300;

function one(){
    const username="Pranjal";

      function two(){
        const website="youtube";
        console.log(username);  //pranjal
      }
    //   console.log(website);//not defined
  two();
}
one()

if(true){
    const username="hitesh";
    if(username==="hitesh")
    {
        const website="youtube";
        console.log(username+website);
    }
    // console.log(website);

}

// console.log(username);

console.log(addone(5))

function addone(num){
return num+1;
}

// addTwo(5)//cannot access before initialize due to temporal dead zone
// const addTwo=function(num){
//     return num
// }

let pet='hamester';
function checkPet(){
  console.log(pet);
}
pet="tommy";
checkPet(); //tommy because redeclared