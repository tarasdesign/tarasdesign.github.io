// JavaScript Document

// Define paths to SVG icons
const sunIcon = 'images/icon/sun.svg';
const moonIcon = 'images/icon/moon.svg';

// Run the function on page load
window.onload = init;

function init() {
    applyStoredTheme();
    document.getElementById('icon-container').addEventListener('click', toggleTheme);
}

// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.body.className;
    let newTheme = currentTheme === 'light' ? 'dark' : 'light';
    let svgPath = newTheme === 'light' ? moonIcon : sunIcon;
    
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    updateIcon(svgPath);
}

// Apply theme from localStorage (if set)
function applyStoredTheme() {
    let storedTheme = localStorage.getItem('theme') || 'light';
    let svgPath = storedTheme === 'light' ? moonIcon : sunIcon;
    
    document.body.className = storedTheme;
    updateIcon(svgPath);
}

// Function to update icon
function updateIcon(svgPath) {
    var svgContainer = document.getElementById("icon-container");
    fetch(svgPath)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch SVG: ${response.statusText}`);
        }
        return response.text(); // Get the SVG content as text
    })
    .then(svgContent => {
        svgContainer.innerHTML = svgContent; // Insert SVG content into the container
    })
    .catch(error => {
        console.error('Error loading SVG:', error);
    });
}



/*

// Randomly swap images on click

window.onload = init;

let previousIndex = -1; // Store the index of the previously displayed image

function init() {
    // Call the swap function on page load
    swap();
    var svgContainer = document.getElementById("icon-container");
    svgContainer.addEventListener("click", swap);
}

// Swap image inside div
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

    // Get the container where the SVG will be inserted
    var svgContainer = document.getElementById("icon-container");

    // Path to the SVG file
    var svgPath = selectedImage;
    
    // Add background image with CSS
    // document.getElementsByClassName("icon-container")[0].style.backgroundImage = "url(" + selectedImage + ")";

    // Fetch the SVG content to insert into HTML
    fetch(svgPath)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch SVG: ${response.statusText}`);
        }
        return response.text(); // Get the SVG content as text
    })
    .then(svgContent => {
        svgContainer.innerHTML = svgContent; // Insert SVG content into the container
    })
    .catch(error => {
        console.error('Error loading SVG:', error);
    });
}
*/
