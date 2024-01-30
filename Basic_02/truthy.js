//falsy values => false,0,-0,,BigInt On,"",null,undefined

//truthy values => "0",'false'," ",[],{},function(){}

const userEmail=[];
if(userEmail.length===0)
{
    console.log(`Array is empty`)
}
if(userEmail)
{
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

const emptyObj={}
if(Object.keys(emptyObj).length === 0)
{
    console.log(`Object is empty`);
}

//Nullish Coalescing Operator(??): null undfined

let leftCheck;
leftCheck = 5 ?? 10// 
console.log(leftCheck); //=>5 reason:left operand is not null
leftCheck = null ?? 15;
// leftCheck = undefined ?? 15
console.log(leftCheck)