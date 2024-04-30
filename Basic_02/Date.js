const myDate=new Date("01-14-2024")
const timeStamp=Date.now()



const left=timeStamp-myDate
const leftDate=new Date(left)

console.log(myDate.toString())
console.log(leftDate)