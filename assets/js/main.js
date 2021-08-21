const hour = document.getElementById("clock-hour");
const minutes = document.getElementById("clock-minutes");
const seconds = document.getElementById("clock-seconds");

const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(clock, 1000);

const textClock = document.getElementById("text-clock");
const textHour = document.getElementById("text-hour");
const textMinutes = document.getElementById("text-minutes");
const textDay = document.getElementById("text-day");
const textMonth = document.getElementById("text-month");
const textYear = document.getElementById("text-year");

const clockText = () => {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ampm = hh < 12 ? "AM" : "PM";

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    textClock.dataset.ampm = ampm;
    textHour.innerHTML = hh === 0 ? 12 : hh < 10 ? `0${hh}` : hh;
    textMinutes.innerHTML = mm < 10 ? `:0${mm}` : `:${mm}`;

    textDay.innerHTML = day;
    textMonth.innerHTML = Number(month + 1);
    textYear.innerHTML = year;
};

setInterval(clockText, 1000);

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bxs-moon" : "bxs-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](
        iconTheme
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});
