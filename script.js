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
    chores: ["Mop the kitchen", "Mop the entry way", "Fold Remaining Laundry"],
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
  const dayHeading = document.getElementById("dayHeading"); // Assuming dayHeading is defined
  const choreList = document.getElementById("choreList"); // Assuming choreList is defined

  // Assuming weekdays and dayOfWeek are defined elsewhere in your code
  const dayChore = weekdays[dayOfWeek].chores;

  dayHeading.textContent = `Today is ${weekdays[dayOfWeek].name}`;

  dayChore.forEach(function (string) {
    const listItem = document.createElement("div");
    listItem.textContent = string;

    // Adding the "X" button
    const removeButton = document.createElement("button");
    removeButton.textContent = "X";

    removeButton.addEventListener("click", function () {
      const index = dayChore.indexOf(string);
      if (index !== -1) {
        dayChore.splice(index, 1);
      }
      listItem.remove();
    });

    // Appending the "X" button to the listItem
    listItem.appendChild(removeButton);

    // Appending the listItem to the choreList
    choreList.appendChild(listItem);
  });
});
