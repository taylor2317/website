let gcse = false;
let alevel = false;
let i = 0;

const GCSE = [
    "/Resources/Coursework/GCSE DT/GCSE DT Front Cover.png",
    "/Resources/Coursework/GCSE DT/GCSE DT Contextual Problem.png",
    "/Resources/Coursework/GCSE DT/GCSE DT Product Analysis.png",
    "/Resources/Coursework/GCSE DT/GCSE DT Design Ideas.png",
    "/Resources/Coursework/GCSE DT/GCSE DT Developed Ideas.png",
    "/Resources/Coursework/GCSE DT/GCSE DT Orthographic.png"
];

const ALevel = [
    "/Resources/Coursework/A-Level DT/A-Level DT Front Cover.png",
    "/Resources/Coursework/A-Level DT/A-Level DT Secondary Research.png",
    "/Resources/Coursework/A-Level DT/A-Level DT Design Concepts.png",
    "/Resources/Coursework/A-Level DT/A-Level DT Client Feedback.png",
    "/Resources/Coursework/A-Level DT/A-Level DT Assessing Feedback.png",
    "/Resources/Coursework/A-Level DT/A-Level DT Health & Safety.png"
];

function GCSEDTPopup() {
    console.log("GCSE Popup activated.");
    gcse = true;
    alevel = false;
    i = 0;
    console.log("GCSE is set to true. A-Level is set to false. Image index (i) reset to 0.");
    popups();
}

function ALevelDTPopup() {
    console.log("A-Level Popup activated.");
    alevel = true;
    gcse = false;
    i = 0;
    console.log("A-Level is set to true. GCSE is set to false. Image index (i) reset to 0.");
    popups();
}

function popups() {
    console.log("Popup displayed.");
    document.querySelector('.popup').style.display = 'block';
    updateImage();
}

function popupClose() {
    console.log("Popup closed.");
    document.querySelector('.popup').style.display = 'none';
    gcse = false;
    alevel = false;
}

function next() {
    console.log("Next button clicked.");
    i = (i + 1) % getCurrentArray().length;
    console.log("Image index updated to " + i);
    updateImage();
}

function prev() {
    console.log("Previous button clicked.");
    i = (i - 1 + getCurrentArray().length) % getCurrentArray().length;
    console.log("Image index updated to " + i);
    updateImage();
}

function updateImage() {
    const img = document.getElementById("popupImg");
    const array = getCurrentArray();
    if (img && array.length > 0) {
        console.log("Updating image with source: " + array[i]);
        img.src = array[i];
        updateDots();
    } else {
        console.log("No image found or array is empty.");
    }
}

function getCurrentArray() {
    if (gcse) {
        console.log("Returning GCSE image array.");
        return GCSE;
    } else if (alevel) {
        console.log("Returning A-Level image array.");
        return ALevel;
    } else {
        console.log("No image array selected.");
        return [];
    }
}

function updateDots() {
    const dots = document.querySelectorAll(".dots i");
    console.log("Updating dots.");
    const dotCount = dots.length;

    dots.forEach((dot, index) => {
        // Reverse the index mapping
        const dotIndex = dotCount - 1 - index;

        if (dotIndex === i) {
            console.log("Activating dot " + dotIndex);
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}
