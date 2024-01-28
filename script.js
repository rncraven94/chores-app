use: "strict";

console.log(12);

//days of the week
const dayHeading = document.getElementById("dayHeading");

const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const weekdays = [
  {
    name: "Sunday",
  },
  {
    name: "Monday",
  },
  {
    name: "Tuesday",
  },

  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(weekdays[dayOfWeek].name);

document.addEventListener("DOMContentLoaded", function () {
  dayHeading.textContent = `Today is ${weekdays[dayOfWeek].name}`;
});
