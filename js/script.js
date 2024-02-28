let links = document.getElementById("links");
let icon  = document.getElementById("burger");

icon.addEventListener("click", displayLinks);

function displayLinks()
{
    if(links.style.display == "block"){
        links.style.display = "none";
    }
    else{
        links.style.display = "block";
    }
}
