function dateMethods() {
  const currentDate = new Date();
  console.log("=> Current Date:", currentDate); //=> Current Date
  console.log(myDate.toLocaleString()) //Year 20/4/2024, 8:32:10 pm
  console.log(myDate.toUTCString()) //Sat, 20 Apr 2024 15:30:08 GMT
  console.log(myDate.toLocaleString()) // 20/4/2024, 8:32:10 pm
  // Getting various components of the date
  console.log("=> Date:", currentDate.getDate()); //Date
  console.log("=> Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  //=> Month
  console.log("=> Year:", currentDate.getFullYear()); //=> Year:
  console.log("Hours:", currentDate.getHours()); //=> Hours:
  console.log("=> Minutes:", currentDate.getMinutes()); //=> Minutes
  console.log("=> Seconds:", currentDate.getSeconds()); //=> Seconds

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("=> After setFullYear:", currentDate); //=>After setFullYear:

  currentDate.setMonth(5); // Setting month to June (zero-indexed) 
  console.log("=> After setMonth:", currentDate); //=> After setMonth:

  // Getting and setting time in milliseconds since 1970
  console.log("=> Time in milliseconds since 1970:", currentDate.getTime()); //=> Time in milliseconds since 1970:

  
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
