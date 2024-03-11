document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#datepicker", {
        enableTime: false,
        dateFormat: "Y-m-d",
        defaultDate: "2024-05-30",
        onChange: function(selectedDates, dateStr, instance) {
            updateCountdown();
        }
    });

    updateDateTime();
    setInterval(updateDateTime, 1000);
    setInterval(updateCountdown, 1000);
});

function updateDateTime() {
    const currentDateTimeElement = document.getElementById("currentDateTime");
    const now = new Date();
    currentDateTimeElement.innerHTML = `Current Time: ${now.toLocaleString()}`;
}

function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const daysLeftElement = document.getElementById("daysLeft");

    const selectedDate = new Date(document.getElementById("datepicker").value);
    const now = new Date();

    if (selectedDate > now) {
        const timeDifference = selectedDate - now;
        const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Countdown: ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
        daysLeftElement.innerHTML = `Days Left: ${daysLeft}`;
    } else {
        countdownElement.innerHTML = "Please select a future date.";
        daysLeftElement.innerHTML = "";
    }
}
