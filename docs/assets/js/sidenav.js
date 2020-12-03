// Author: Casey Rodriguez
// Purpose: Open and close the sidenav when the correct buttons are pressed


// Show sidenav
function openSidenav() {
    sideNav.classList.add("menu-on");
    content.classList.add("menu-on");

    sideNav.style["display"] = "inline";
}

// Hide sidenav
function closeSidenav() {
    sideNav.classList.remove("menu-on");
    content.classList.remove("menu-on");
}

menuBtn = document.getElementById("sidenav-toggle");    // Find the button
sideNav = document.getElementById("sidenav");           // Find the sidenav
content = document.getElementById("non-sidenav");       // Find non sidenav content

menuBtn.onclick = function() {openSidenav()};