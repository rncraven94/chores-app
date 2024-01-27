use: "strict";

console.log(12);

//days of the week
const dayHeading = document.getElementById("dayHeading");

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

// document.addEventListener("DOMContentLoaded", function () {
//   dayHeading.textContent = `Today is ${weekdays[dayOfWeek]}`;
// });
