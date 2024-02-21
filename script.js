let btn_prev = document.querySelector(".button-prev");
let btn_next = document.querySelector(".button-next");
let screenshot = document.querySelector(".screenshot");
let i = 1;

const images = [];
for (let j = 1; j <= 5; j++) {
    const img = new Image();
    img.src = `./Images/image${j}.png`;
    images.push(img);
}

btn_next.addEventListener("click", function (e) {
    if (i < 5) {
        i++;
        screenshot.classList.remove("fadeIn"); 
        setTimeout(() => {
            screenshot.src = images[i - 1].src;
            screenshot.classList.add("fadeIn"); 
        }, 50); 
    }
});

btn_prev.addEventListener("click", function (e) {
    if (i > 1) {
        i--;
        screenshot.classList.remove("fadeIn"); 
        setTimeout(() => {
            screenshot.src = images[i - 1].src;
            screenshot.classList.add("fadeIn"); 
        }, 50); 
    }
});

let btn_collapse = document.querySelector(".button-collapse");
let info = document.querySelector(".project-info");
let stack = document.querySelector(".project-stack");
let display_status = info.style.display;

btn_collapse.addEventListener("click", function (e) {
    if (display_status !== "block") {
        info.style.display = "block";
        stack.style.display = "block";
        btn_collapse.innerHTML = "Hide";
        display_status = info.style.display;
    } else {
        info.style.display = "none";
        stack.style.display = "none";
        btn_collapse.innerHTML = "Show";
        display_status = info.style.display;
    }
});
