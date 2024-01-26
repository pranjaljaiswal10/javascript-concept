//let user=fetch("https://api.github.com/users/pranjaljaiswal10")
//Promises object
//.then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error));

//async/await
async function getData(){
  const response=await fetch("https://api.github.com/users/pranjaljaiswal10")
  const data=await response.json()
  console.log(data);
}
getData();