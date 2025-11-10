const html = document.documentElement;
const themeCheckbox = document.getElementById("switchCheckDefault");
const themeIcon = document.getElementById("themeIcon");

html.setAttribute("data-bs-theme", "light");
themeCheckbox.checked = false;
themeIcon.classList.add("bi-moon-fill");

themeCheckbox.addEventListener("change", () => {
    if (themeCheckbox.checked) {
        html.setAttribute("data-bs-theme", "dark");
        themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    } else {
        html.setAttribute("data-bs-theme", "light");
        themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
    }
});