function loginUserMessage(username="sam"){
  if(!username){
    console.log("Please enter a username")
    return;
  }
  return `${username} just logged in`

}

console.log(loginUserMessage("hitesh"));

//...rest parameter
function calculateCartPrice(val1,val2,...num1){
  return num1;
}

console.log(calculateCartPrice(200,400,500,200));

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is a${anyObject.price}`)
}

handleObject({
  username:"sam",
  price:399
})
