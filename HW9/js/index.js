// Function to check the date and determine the type of day
function checkDate(event) {
    event.preventDefault(); // Prevent page reload
    const dateInput = document.getElementById("dateInput").value;

    if (!dateInput) {
        alert("Please select a date!");
        return;
    }

    const date = new Date(dateInput);
    const currentDayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
    const currentDayOfMonth = date.getDate();
    const currentMonth = date.getMonth() + 1; // Months are 0-indexed

    let result = "It's a work day.";

    if (checkIfWeekend(currentDayOfWeek)) {
        result = "It's a day for relaxation!";
    } else if (checkIfHoliday(currentDayOfMonth, currentMonth)) {
        result = "It's a holiday! Relax and enjoy!";
    }

    document.getElementById("result").innerText = result;
}

// Function to check if it's a weekend
function checkIfWeekend(day) {
    return day === 0 || day === 6 || day === 5; // Sunday, Saturday, or Friday
}

// Corrected function to check if it's a holiday
function checkIfHoliday(day, month) {
    const holidays = [
        { day: 25, month: 12 }, // Christmas
        { day: 4, month: 7 },   // Fourth of July
        { day: 28, month: 11 }  // Thanksgiving
    ];

    // Compare day and month with each holiday
    for (const holiday of holidays) {
        if (holiday.day === day && holiday.month === month) {
            return true;
        }
    }
    return false;
}
