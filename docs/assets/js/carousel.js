// Author: Casey Rodriguez
// Purpose: Slide to other carousel images on click or after delay



function moveImg(direction) {
    console.log(items);
    for (var i in items) {
        let slide = items[i];
        let style = window.getComputedStyle(slide);
        let final = window.getComputedStyle(items[items.length - 1]).left;

        console.log(slide, style, final);

        if (direction == "left" && style.left != "0px") {           // If going left and not first slide, move left
            slide.style.left = "calc(" + style.left + " + 100%)";
        } else if (direction == "left" && i == 0) {                 // If going left and first slide, move to last slide
            slide.style.left = "400%"
        } else if (direction == "right" && style.left != final) {   // If going right and not last slide, move right
            slide.style.left = "calc(" + style.left + " - 100%)";
        } else {                                                    // Reset to first slide
            slide.style.left = "0%";
        }
    }
}

// Translate carousel-inner by trans to show next image
function updateImg() {
    tx = trans;
    shift = "translateX(" + tx + ')'
    inner.style.transform = shift;
}

leftBtn  = document.getElementById("carousel-control-left");
rightBtn = document.getElementById("carousel-control-right");
items    = document.getElementsByClassName("carousel-item");

leftBtn.onclick  = function() {moveImg("left")};
rightBtn.onclick = function() {moveImg("right")};