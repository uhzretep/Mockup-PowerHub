"use strict";

window.onload = function() {
    var modal = document.getElementById("signup-modal");
    var modalContainer = document.getElementsByClassName("signup-modal-container")[0]; 

    // Centering the modal vertically
    var topMargin = Math.max(0, ((window.innerHeight - modalContainer.offsetHeight) / 2));
    modalContainer.style.marginTop = `${topMargin}px`;
    //console.log(`${window.innerHeight} ${modalContainer.offsetHeight} ${topMargin}`);

    // Resizing the modal according the screen size
    window.onresize = function() { 
        topMargin = Math.max(0, ((window.innerHeight - modalContainer.offsetHeight) / 2));
        modalContainer.style.marginTop = `${topMargin}px`;
    };

    // Closes the modal when user clicks outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};