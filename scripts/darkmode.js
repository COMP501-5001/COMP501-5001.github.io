function darkMode() {
    var r = document.querySelector(':root');
    
    if (localStorage.getItem("darkMode") === null)
    {
        localStorage.setItem("darkMode","false");
    }

    if (localStorage.getItem("darkMode") === "false") 
    {
        r.style.setProperty('--mainBackgroundColour', 'white');
        r.style.setProperty('--mainTextColour', 'black');
    } 
    else 
    {
        r.style.setProperty('--mainBackgroundColour', '#202124');
        r.style.setProperty('--mainTextColour', '#e0e8f2');
    }
}
function toggleDarkMode() {
    var r = document.querySelector(':root');
    var icon = document.getElementById("lightButtonIcon");
    
    if (localStorage.getItem("darkMode") === "false") 
    {
        localStorage.setItem("darkMode","true");
        icon.innerHTML = "light_mode";
        darkMode();
    } 
    else 
    {
        localStorage.setItem("darkMode","false");
        icon.innerHTML = "dark_mode";
        darkMode();
    }
}