use: "strict";

console.log(12);

//days of the week

const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(weekdays[dayOfWeek]);
