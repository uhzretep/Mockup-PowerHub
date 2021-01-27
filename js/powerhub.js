"use strict";

window.onload = function() {
    var modalContainer = document.getElementsByClassName("signup-modal-container")[0]; 

    // centering the signup modal window vertically
    var topMargin = Math.max(0, ((window.innerHeight - modalContainer.offsetHeight) / 2));
    modalContainer.style.marginTop = `${topMargin}px`;
    //console.log(`${window.innerHeight} ${modalContainer.offsetHeight} ${topMargin}`);

    // re-centers the signup modal window when the window is resized
    window.addEventListener("resize", function(event) { 
        topMargin = Math.max(0, ((window.innerHeight - modalContainer.offsetHeight) / 2));
        modalContainer.style.marginTop = `${topMargin}px`;
    });

    // signup modal window events
    var modal = document.getElementById("signup-modal");
    var modalClose = document.getElementById("modal-close");

    modal.addEventListener("click", function(event) {
        if (event.target == modal || event.target == modalClose) {
            modal.style.display = "none";
        }
    });

    // mobile navbar events // TODO: Are these variable names too long?
    var navbarToggle = document.getElementById("navbar-toggle");
    var mobileNavbar = document.getElementById("mobile-navbar");
    var mobileNavbarClose = document.getElementById("mobile-navbar-close");
    var mobileNavbarDropdownHeader = document.querySelectorAll(".mobile-navbar .dropdown-header");
    var mobileNavbarDropdownContent = document.querySelectorAll(".mobile-navbar .dropdown-content");

    navbarToggle.addEventListener("click", function(event) {
        mobileNavbar.style.display = "flex";
        mobileNavbar.style.opacity = 1;
    });

    // attach a click event listener to each of the drop down headers (currently only 1)
    var mobileHeaders = mobileNavbarDropdownHeader.length;
    for (var i=0; i<mobileHeaders; i++) {
        (function () {
            // for better readability
            var header = mobileNavbarDropdownHeader[i];
            var content = mobileNavbarDropdownContent[i];
            // closes other drop downs before opening a new one
            header.addEventListener("click", function(event) {
                if (content.style.display == "" || content.style.display == "none") { // style.display is "" (empty) on load can also use window.getComputedStyle(elem)
                    for (i=0; i<mobileHeaders; i++) {
                        content.style.display = "none";
                        content.style.opacity = 0;
                    }
                    content.style.display = "block";
                    content.style.opacity = 1;
                } else {
                    content.style.display = "none";
                    content.style.opacity = 0;
                }
            });
        }()); // immediately invoked (not sure if needed) // TODO: need testing for multiple dropdown headers
    }

    mobileNavbar.addEventListener("click", function(event) {
        if (event.target == mobileNavbarClose) {
            // closes drop down content before closing the mobile navbar
            for (i=0; i<mobileHeaders; i++) {
                mobileNavbarDropdownContent[i].style.display = "none";
            }
            mobileNavbar.style.display = "none";
            mobileNavbar.style.opacity = 0;
        }
    });
};