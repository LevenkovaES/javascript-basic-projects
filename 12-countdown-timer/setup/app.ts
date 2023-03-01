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

const fullEndDate: Date = new Date(2023, 1, 21, 19, 20);

displayEndDate();

let countDown: number;
displayTimeDifference();
countDown = setInterval(displayTimeDifference, 1000);

function displayEndDate(): void {
  const endYear: number = fullEndDate.getFullYear();
  const endMonth: number = fullEndDate.getMonth();
  const endDate: number = fullEndDate.getDate();
  const endDay: number = fullEndDate.getDay();
  const endHours: number | string =
    fullEndDate.getHours() <= 12
      ? fullEndDate.getHours() >= 10
        ? fullEndDate.getHours()
        : "0" + fullEndDate.getHours()
      : fullEndDate.getHours() - 12;
  const endMinutes: string =
    fullEndDate.getMinutes() >= 10
      ? "" + fullEndDate.getMinutes()
      : "0" + fullEndDate.getMinutes();
  const amOrPm: "am" | "pm" = fullEndDate.getHours() < 12 ? "am" : "pm";

  const endDateElement: HTMLElement | null =
    document.querySelector(".giveaway");
  if (endDateElement) {
    endDateElement.textContent = `Giveaway ends on ${weekdays[endDay]}, ${endDate} ${months[endMonth]} ${endYear}, ${endHours}:${endMinutes}${amOrPm}`;
  }
}

function displayTimeDifference(): void {
  const currentTime: number = Date.now();
  const timeDifference = fullEndDate.getTime() - currentTime;

  let dayDifference: number = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
  let hoursDifference: number = Math.floor(
    timeDifference / 1000 / 60 / 60 - dayDifference * 24
  );
  let minutesDifference: number = Math.floor(
    timeDifference / 1000 / 60 - dayDifference * 24 * 60 - hoursDifference * 60
  );
  let secondsDifference: number = Math.floor(
    timeDifference / 1000 -
      dayDifference * 24 * 60 * 60 -
      hoursDifference * 60 * 60 -
      minutesDifference * 60
  );

  if (timeDifference < 0) {
    // dayDifference = 0;
    // hoursDifference = 0;
    // minutesDifference = 0;
    // secondsDifference = 0;

    const expired: HTMLElement = document.createElement("h4");
    expired.classList.add("expired");
    expired.textContent = "sorry, this giveaway has expired";

    clearInterval(countDown);

    document.querySelector(".deadline")?.replaceChildren(expired);
  }

  const days: HTMLElement | null = document.querySelector(".days");
  const hours: HTMLElement | null = document.querySelector(".hours");
  const mins: HTMLElement | null = document.querySelector(".mins");
  const secs: HTMLElement | null = document.querySelector(".secs");

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

  function formatValue(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
