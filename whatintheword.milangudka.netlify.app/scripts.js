// Check if high contrast mode is enabled in localStorage
if (localStorage.getItem('contrast') === "true") {
    // Change background color of header to white and text color to black
    document.querySelector('.header').style.backgroundColor = 'white';
    document.querySelector('.header h1 a').style.color = 'black';
    document.querySelector('.header h1 i').style.color = 'black';

    // Change background color and text color of all h1 elements on the page to match high contrast mode
    document.querySelectorAll('.page h1').forEach(element => {
        element.style.backgroundColor = 'white'; // White background for h1 elements
        element.style.color = 'black'; // Black text for h1 elements
    });

    // Change background color of all popups to white
    document.querySelectorAll('.popup').forEach(element => {
        element.style.backgroundColor = 'white'; // White background for popups
    });
} 
// If contrast mode is not enabled
else {
    // Get all elements on the page
    const elements = document.querySelectorAll('*');
    // Loop through each element and remove inline styles
    elements.forEach(function(element) {
        element.removeAttribute('style'); // Removes any inline styles applied to the element
    });
}

// Functions to navigate to different game pages
function four() {
    window.location.href = 'fourletter.html';  // Navigate to the 4-letter game page
}

function five() {
    window.location.href = 'fiveletter.html';  // Navigate to the 5-letter game page
}

function six() {
    window.location.href = 'sixletter.html';  // Navigate to the 6-letter game page
}
