// Author: Casey Rodriguez
// Purpose: Open and close the sidenav when the correct buttons are pressed


// Show sidenav
function openSidenav() {
    sideNav.classList.add("menu-on");
    content.classList.add("menu-on");
    footer.classList.add("menu-on");
}

// Hide sidenav
function closeSidenav() {
    sideNav.classList.remove("menu-on");
    content.classList.remove("menu-on");
    footer.classList.remove("menu-on");
}

menuBtn  = document.getElementById("sidenav-toggle");    // Find the button
closeBtn = document.getElementById("close-nav");         // Find the close button
sideNav  = document.getElementById("sidenav");           // Find the sidenav
content  = document.getElementById("non-sidenav");       // Find non sidenav content
footer   = document.getElementsByTagName("footer")[0]    // Find footer

menuBtn.onclick  = function() {openSidenav()};
closeBtn.onclick = function() {closeSidenav()};