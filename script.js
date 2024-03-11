document.addEventListener("DOMContentLoaded", function() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
    setInterval(updateCountdown, 1000);
});

function updateDateTime() {
    const currentDateTimeElement = document.getElementById("currentDateTime");
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    currentDateTimeElement.innerHTML = `Current: ${now.toLocaleString('en-US', options)}`;
}

function updateCountdown() {
    const countdownElement = document.getElementById("countdown");

    const targetDate = new Date("2024-05-30T00:00:00"); // May 30th, 2024
    const now = new Date();

    if (targetDate > now) {
        const timeDifference = targetDate - now;
        const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        countdownElement.innerHTML = `Countdown: ${daysLeft}d ${hoursLeft}h 00m 00s`;
    } else {
        countdownElement.innerHTML = "Countdown: 0d 00h 00m 00s";
    }
}
