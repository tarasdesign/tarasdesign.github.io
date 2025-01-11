// JavaScript Document

window.onload = init;

let previousIndex = -1; // Store the index of the previously displayed image

function init() {
    // Call the swap function on page load
    swap();

    // Add click event listener to the first element with class "icon"
    var iconElement = document.getElementsByClassName("icon")[0];
    if (iconElement) {
        iconElement.addEventListener("click", swap);
    }
}

function swap() {
    var numimages = 6;
    var randomimage = [
        "images/icon/icon1.svg",
        "images/icon/icon2.svg",
        "images/icon/icon3.svg",
        "images/icon/icon4.svg",
        "images/icon/icon5.svg",
        "images/icon/icon6.svg"
    ];

    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * numimages);
    } while (newIndex === previousIndex); // Ensure the new index is different

    previousIndex = newIndex; // Update the previous index
    var selectedImage = randomimage[newIndex];

    document.getElementsByClassName("icon")[0].style.backgroundImage = "url(" + selectedImage + ")";
}
