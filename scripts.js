function menu() {
    document.querySelectorAll('.menuList').forEach(element => {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    });
}