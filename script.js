use: "strict";

console.log(12);

//days of the week
const dayHeading = document.getElementById("dayHeading");
const choreList = document.getElementById("choreList");

const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const weekdays = [
  {
    name: "Sunday",
    chores: ["Clean out the fridge", "Laundry"],
  },
  {
    name: "Monday",
  },
  {
    name: "Tuesday",
  },
  {
    name: "Wednesday",
  },
  {
    name: "Thursday",
  },
  {
    name: "Friday",
  },
  {
    name: "Saturday",
  },
];
console.log(weekdays[dayOfWeek].name);

document.addEventListener("DOMContentLoaded", function () {
  dayHeading.textContent = `Today is ${weekdays[dayOfWeek].name}`;
  choreList.textContent = `${weekdays[dayOfWeek].chores}`;
});
