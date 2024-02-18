let btn_prev = document.querySelector(".button-prev"); 
let btn_next = document.querySelector(".button-next"); 

let screenshot = document.querySelector(".screenshot");

let i = 1;

btn_next.addEventListener("click", function(e) {
    if(i < 5)
    {
        i++;
        screenshot.src=`./Images/image${i}.png`;
    }
});

btn_prev.addEventListener("click", function(e) {
    if(i > 1)
    {
        i--;
        screenshot.src=`./Images/image${i}.png`;
    }
});


