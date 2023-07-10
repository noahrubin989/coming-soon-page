// Encapsulate the interval logic within a function and pass the date value as a parameter.
const startCountdown = (dateValue) => {
  let interval = setInterval(() => {
    let now = new Date().getTime();
    let diff = dateValue - now;
    let d = Math.floor(diff / (1000 * 60 * 60 * 24));
    let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector("#days").textContent = d;
    document.querySelector("#hours").textContent = h;
    document.querySelector("#minutes").textContent = m;
    document.querySelector("#seconds").textContent = s;

    if (diff < 0) {
      clearInterval(interval);
      document.querySelector("#days").textContent = "00";
      document.querySelector("#hours").textContent = "00";
      document.querySelector("#minutes").textContent = "00";
      document.querySelector("#seconds").textContent = "00";
    }
  }, 1000);
};

// Main:
let targetDate = new Date("Dec 31, 2023 00:00:00").getTime();
startCountdown(targetDate);
