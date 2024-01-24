let user="Pranjal Jaiswal"
function greeting(){
    console.log(`Good Morning ${user}`)
}
setTimeout(greeting,5000);

let count=1;
function counter(){
   count++;
   console.log(count)
   if(count==5){
    clearInterval(timerId)
}
}
let timerId=setInterval(counter,1000);
