//Hamburger Icon(Dropdown)
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

//Full Screen Function
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".clickable-image");
    const overlay = document.querySelector(".fullscreen-overlay");
    const fullscreenImg = document.getElementById("fullscreen-img");

    images.forEach(image => {
        image.addEventListener("click", function () {
            fullscreenImg.src = this.src;
            overlay.classList.add("active");
        });
    });

    overlay.addEventListener("click", function () {
        overlay.classList.remove("active");
    });
});

//Color-coding Tags
const tagColors = {
    "microsoft excel": { bg: "green", text: "white" },
    "sql": { bg: "orange", text: "white" },
    "python": { bg: "blue", text: "white" },
    "power bi": { bg: "yellow", text: "black" }, 
    "tableau": { bg: "gray", text: "white" }
};

document.querySelectorAll('.tag').forEach(tag => {
    const text = tag.textContent.trim().toLowerCase();
    if (tagColors[text]) {
        tag.style.backgroundColor = tagColors[text].bg;
        tag.style.color = tagColors[text].text;
    }
});