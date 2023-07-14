const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const weekdayCheckboxes = document.getElementsByName("weekday");
const checkAllCheckbox = document.getElementById("checkAll");

function updateCheckboxes() {
  let startDate = new Date(startDateInput.value);
  let endDate = new Date(endDateInput.value);

  let selectedDays = [];

  // Loop through the dates in the range
  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    let dayIndex = date.getDay();
    let dayCheckbox = weekdayCheckboxes[dayIndex];
    dayCheckbox.checked = true;
    selectedDays.push(dayCheckbox.value);
  }

  // Uncheck the remaining checkboxes
  for (let i = 0; i < weekdayCheckboxes.length; i++) {
    if (!selectedDays.includes(weekdayCheckboxes[i].value)) {
      weekdayCheckboxes[i].checked = false;
    }
  }

  // Check or uncheck the "Check All" checkbox based on the checkbox states
  const allChecked = Array.from(weekdayCheckboxes).every(function (checkbox) {
    return checkbox.checked;
  });
  checkAllCheckbox.checked = allChecked;
}

// Add event listeners
startDateInput.addEventListener("change", updateCheckboxes);
endDateInput.addEventListener("change", updateCheckboxes);
checkAllCheckbox.addEventListener("change", function () {
  let isChecked = checkAllCheckbox.checked;
  weekdayCheckboxes.forEach(function (checkbox) {
    checkbox.checked = isChecked;
  });
});
