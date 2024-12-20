if (localStorage.colMode == "true"){//If high contrast is turned on
    document.getElementById("background").style.backgroundImage= "none";
    document.getElementById("header").style.backgroundColor= "white";
}
else{//If high contrast is turned off
    document.getElementById("background").style.backgroundImage = "url('Background.jpg')";
    document.getElementById("header").style.backgroundColor= "rgba(255, 255, 255, 0.5)";
}

function colOn() {//If high contrast is toggled
        localStorage.colMode = "true";
        reloader()
    }
    
function colOff() {
        localStorage.colMode = "false";
        reloader()
    }

function reloader(){//Reloads page
    window.location.reload();
}

