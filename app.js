import { createCountDownDivs, appendCountDownDivs } from "./js/utils.js";

let countdownDivs = createCountDownDivs();
appendCountDownDivs(countdownDivs, document.querySelector(".countdown"));

// Encapsulate the interval logic within a function and pass the date value as a parameter.
const startCountdown = (dateValue) => {
  let interval = setInterval(() => {
    let now = new Date().getTime();
    let diff = dateValue - now;

    const times = [
      {
        timeCalculation: Math.floor(diff / (1000 * 60 * 60 * 24)),
        element: document.querySelector("#days"),
      },
      {
        timeCalculation: Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        element: document.querySelector("#hours"),
      },
      {
        timeCalculation: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        element: document.querySelector("#minutes"),
      },
      {
        timeCalculation: Math.floor((diff % (1000 * 60)) / 1000),
        element: document.querySelector("#seconds"),
      },
    ];

    times.forEach((period) => {
      period.element.textContent = period.timeCalculation;
    });

    if (diff < 0) {
      clearInterval(interval);
      times.forEach((period) => {
        period.element.textContent = "00";
      });
    }
  }, 1000);
};

// Main:
let targetDate = new Date("Jul 31, 2023 00:00:00").getTime();
startCountdown(targetDate);
