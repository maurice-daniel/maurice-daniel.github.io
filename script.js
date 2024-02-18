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
btn_next.addEventListener("click", function(e) {
    if (i < 5) {
        i++;
        screenshot.src = images[i - 1].src;
    }
});

btn_prev.addEventListener("click", function(e) {
    if (i > 1) {
        i--;
        screenshot.src = images[i - 1].src;
    }
});

