function dateMethods() {
  const currentDate = new Date();
  console.log("=> Current Date:", currentDate); //=> Current Date

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

  const newDate = new Date(2023, 8, 15);
  console.log("=> New Date:", newDate);  // Creating a new date:
}

// Example Usage for Date Methods
dateMethods();
