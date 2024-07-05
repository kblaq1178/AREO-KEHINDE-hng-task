document.addEventListener('DOMContentLoaded', (event) => {
    function updateTimeAndDay() {
        const currentHoursElement = document.getElementById('current-hours');
        const currentMinutesElement = document.getElementById('current-minutes');
        const currentDayElement = document.getElementById('current-day');

        const currentDateTime = new Date();
        const hours = String(currentDateTime.getUTCHours()).padStart(2, '0');
        const minutes = String(currentDateTime.getUTCMinutes()).padStart(2, '0');
        const dayOfWeek = currentDateTime.toLocaleDateString('en-GB', { weekday: 'long' });

        currentHoursElement.textContent = hours;
        currentMinutesElement.textContent = minutes;
        currentDayElement.textContent = dayOfWeek;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000); // update every second
});
