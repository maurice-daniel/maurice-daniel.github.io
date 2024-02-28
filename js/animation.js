let image = document.querySelector(".oscanner");
const num_images = 5;

function preLoadFirstImage(className) {
  let img = new Image();
  img.src = `./images/screenshots/${className}/image1.png`;
  return img;
}

let firstImage = preLoadFirstImage("oscanner");

let index = 1;
function autoSlideShow() {
  image.style.opacity = 0;

  setTimeout(() => {
    // Load the next image based on index
    let img = new Image();
    img.src = `./images/screenshots/oscanner/image${index + 1}.png`;
    img.onload = function() {
      // Replace image only after the next image is loaded
      image.src = img.src;
      image.style.opacity = 1;
      index++;
      if (index >= num_images) {
        index = 0;
      }
    };
  }, 500);
}

image.src = firstImage.src;
image.style.opacity = 1;
setInterval(autoSlideShow, 2300);

