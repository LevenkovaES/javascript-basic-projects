"use strict";
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const fullEndDate = new Date(2023, 1, 21, 19, 20);
displayEndDate();
let countDown;
displayTimeDifference();
countDown = setInterval(displayTimeDifference, 1000);
function displayEndDate() {
    const endYear = fullEndDate.getFullYear();
    const endMonth = fullEndDate.getMonth();
    const endDate = fullEndDate.getDate();
    const endDay = fullEndDate.getDay();
    const endHours = fullEndDate.getHours() <= 12
        ? fullEndDate.getHours() >= 10
            ? fullEndDate.getHours()
            : "0" + fullEndDate.getHours()
        : fullEndDate.getHours() - 12;
    const endMinutes = fullEndDate.getMinutes() >= 10
        ? "" + fullEndDate.getMinutes()
        : "0" + fullEndDate.getMinutes();
    const amOrPm = fullEndDate.getHours() < 12 ? "am" : "pm";
    const endDateElement = document.querySelector(".giveaway");
    if (endDateElement) {
        endDateElement.textContent = `Giveaway ends on ${weekdays[endDay]}, ${endDate} ${months[endMonth]} ${endYear}, ${endHours}:${endMinutes}${amOrPm}`;
    }
}
function displayTimeDifference() {
    var _a;
    const currentTime = Date.now();
    const timeDifference = fullEndDate.getTime() - currentTime;
    let dayDifference = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    let hoursDifference = Math.floor(timeDifference / 1000 / 60 / 60 - dayDifference * 24);
    let minutesDifference = Math.floor(timeDifference / 1000 / 60 - dayDifference * 24 * 60 - hoursDifference * 60);
    let secondsDifference = Math.floor(timeDifference / 1000 -
        dayDifference * 24 * 60 * 60 -
        hoursDifference * 60 * 60 -
        minutesDifference * 60);
    if (timeDifference < 0) {
        // dayDifference = 0;
        // hoursDifference = 0;
        // minutesDifference = 0;
        // secondsDifference = 0;
        const expired = document.createElement("h4");
        expired.classList.add("expired");
        expired.textContent = "sorry, this giveaway has expired";
        clearInterval(countDown);
        (_a = document.querySelector(".deadline")) === null || _a === void 0 ? void 0 : _a.replaceChildren(expired);
    }
    const days = document.querySelector(".days");
    const hours = document.querySelector(".hours");
    const mins = document.querySelector(".mins");
    const secs = document.querySelector(".secs");
    if (days) {
        days.textContent = `${formatValue(dayDifference)}`;
    }
    if (hours) {
        hours.textContent = `${formatValue(hoursDifference)}`;
    }
    if (mins) {
        mins.textContent = `${formatValue(minutesDifference)}`;
    }
    if (secs) {
        secs.textContent = `${formatValue(secondsDifference)}`;
    }
    function formatValue(value) {
        return value < 10 ? `0${value}` : `${value}`;
    }
}
