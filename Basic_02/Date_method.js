function dateMethods() {
  const myDate = new Date();
  console.log("=> Current Date:", myDate); //=> Current Date
  console.log(myDate.toLocaleString()) //Year DD/MM/YYYY, HH:MM:SS pm
  console.log(myDate.toUTCString()) //Sat, 20 Apr 2024 15:30:08 GMT
  // Getting various components of the date
  console.log("=> Date:", myDate.getDate()); //Date
  console.log("=>Days",myDate.getDay())
  console.log("=> Month:", myDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  //=> Month
  console.log("=> Year:", myDate.getFullYear()); //=> Year:
  console.log("Hours:", myDate.getHours()); //=> Hours:
  console.log("=> Minutes:", myDate.getMinutes()); //=> Minutes
  console.log("=> Seconds:", myDate.getSeconds()); //=> Seconds

  // Setting components of the date
  myDate.setFullYear(2022);
  console.log("=> After setFullYear:", myDate); //=>After setFullYear:

  myDate.setMonth(5); // Setting month to June (zero-indexed) 
  console.log("=> After setMonth:", myDate); //=> After setMonth:

  // Getting and setting time in milliseconds since 1970
  console.log("=> Time in milliseconds since 1970:", myDate.getTime()); //=> Time in milliseconds since 1970:

  
 //Accept format:MM/DD/YYYY or YYYY/MM/DD
 const user1Date=new Date('02/04/2000')
console.log(user1Date)

  const newDate = new Date(2023, 8, 15);
  console.log("=> New Date:", newDate);  // Creating a new date:
}

 //reverse date
 //split it into variable

 
// Example Usage for Date Methods
dateMethods();
