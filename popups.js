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
    gcse = true;
    alevel = false;
    i = 0;
    popups();
}

function ALevelDTPopup() {
    alevel = true;
    gcse = false;
    i = 0;
    popups();
}

function popups() {
    document.querySelector('.popup').style.display = 'block';
    updateImage();
}

function popupClose() {
    document.querySelector('.popup').style.display = 'none';
    gcse = false;
    alevel = false;
}

function next() {
    i = (i + 1) % getCurrentArray().length;
    updateImage();
}

function prev() {
    i = (i - 1 + getCurrentArray().length) % getCurrentArray().length;
    updateImage();
}

function updateImage() {
    const img = document.getElementById("popupImg");
    const array = getCurrentArray();
    if (img && array.length > 0) {
        img.src = array[i];
        updateDots();
    }
}

function getCurrentArray() {
    return gcse ? GCSE : ALevel;
}

function updateDots() {
    const dots = document.querySelectorAll(".dots i");
    dots.forEach((dot, index) => {
        if (index === i) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}