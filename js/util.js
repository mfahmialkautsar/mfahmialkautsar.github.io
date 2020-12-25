let theme = localStorage.getItem("theme");

let themeIcon = document.querySelector(".theme-switcher i");

if (theme != "night") {
    theme = "day";
    themeIcon.classList.add("fa-sun-o");
} else {
    theme = "night";
    themeIcon.classList.add("fa-moon-o");
}
setTheme(theme);

let themeButton = document.querySelector(".theme-switcher");
themeButton.setAttribute("data-mode", theme);

let rotate = true;
themeButton.addEventListener("click", function () {
    var mode = themeButton.getAttribute("data-mode");
    if (mode == "day") {
        themeButton.setAttribute("data-mode", "night");
        themeIcon.classList.remove("fa-sun-o");
        themeIcon.classList.add("fa-moon-o");
    } else if (mode == "night") {
        themeButton.setAttribute("data-mode", "day");
        themeIcon.classList.remove("fa-moon-o");
        themeIcon.classList.add("fa-sun-o");
    }

    if (rotate) {
        themeIcon.classList.add("rotate");
    } else {
        themeIcon.classList.remove("rotate");
    }

    rotate = !rotate;
    setTheme(this.dataset.mode);
});

function setTheme(mode) {
    if (mode == "day") {
        document.getElementById("theme-style").href = "css/style.css";
    } else if (mode == "night") {
        document.getElementById("theme-style").href = "css/night.css";
    }

    localStorage.setItem("theme", mode);
}
