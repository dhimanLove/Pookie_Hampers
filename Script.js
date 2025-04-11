document.addEventListener("DOMContentLoaded", function() {
    var icon = document.getElementsByClassName("icon")[0];
    var menu = document.getElementById("myMenu"); 

    if (icon && menu) {
        icon.addEventListener("click", function() {
            menu.classList.toggle("show"); 
        });
        document.addEventListener("click", function(event) {
            if (!icon.contains(event.target) && !menu.contains(event.target) && menu.classList.contains("show")) {
                menu.classList.remove("show");
            }
        });
    } else {
        console.error("Error: Element with class 'icon' or ID 'myMenu' not found.");
    }
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    lerp:0.05,
});