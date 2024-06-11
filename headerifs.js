let current = window.location.href

if (current.slice(-9)=="home.html"){
    homeNav.className += " active"

}
else if (current.slice(-10)=="about.html"){
    aboutNav.className += " active"
}
else if (current.slice(-14)=="portfolio.html"){
    portNav.className += " active"
}
else if (current.slice(-12)=="contact.html"){
    contNav.className += " active"
}

