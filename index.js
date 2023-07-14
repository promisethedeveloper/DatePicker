// // Select the "Check All" checkbox
// const checkAllCheckbox = document.getElementById("checkAll");

// // Get all weekday checkboxes
// const allWeekDayCheckBoxes = document.getElementsByName("weekday");

// // Add an eventlistener on the "Check All" checkbox
// checkAllCheckbox.addEventListener("change", function () {
//   // check and uncheck all weekly checkboxws based on the state of the "Chekck All" box
//   for (let i = 0; i < allWeekDayCheckBoxes.length; i++) {
//     allWeekDayCheckBoxes[i].checked = checkAllCheckbox.checked;
//   }
// });

var startDateInput = document.getElementById("startDate");
var endDateInput = document.getElementById("endDate");
var weekdayCheckboxes = document.getElementsByName("weekday");
var checkAllCheckbox = document.getElementById("checkAll");

function updateCheckboxes() {
  var startDate = new Date(startDateInput.value);
  var endDate = new Date(endDateInput.value);

  var selectedDays = [];

  // Loop through the dates in the range
  for (
    var date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    var dayIndex = date.getDay();
    var dayCheckbox = weekdayCheckboxes[dayIndex];
    dayCheckbox.checked = true;
    selectedDays.push(dayCheckbox.value);
  }

  // Uncheck the remaining checkboxes
  for (var i = 0; i < weekdayCheckboxes.length; i++) {
    if (!selectedDays.includes(weekdayCheckboxes[i].value)) {
      weekdayCheckboxes[i].checked = false;
    }
  }

  // Check or uncheck the "Check All" checkbox based on the checkbox states
  var allChecked = Array.from(weekdayCheckboxes).every(function (checkbox) {
    return checkbox.checked;
  });
  checkAllCheckbox.checked = allChecked;
}

// Add event listeners
startDateInput.addEventListener("change", updateCheckboxes);
endDateInput.addEventListener("change", updateCheckboxes);
checkAllCheckbox.addEventListener("change", function () {
  var isChecked = checkAllCheckbox.checked;
  weekdayCheckboxes.forEach(function (checkbox) {
    checkbox.checked = isChecked;
  });
});
