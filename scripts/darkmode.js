function darkMode() {
    var r = document.querySelector(':root');
    var icon = document.getElementById("lightButtonIcon");
    
    if (localStorage.getItem("darkMode") === null)
    {
        localStorage.setItem("darkMode","false");
    }

    if (localStorage.getItem("darkMode") === "false") 
    {
        r.style.setProperty('--mainBackgroundColour', 'white');
        r.style.setProperty('--mainTextColour', 'black');
        icon.innerHTML = "dark_mode";
    } 
    else 
    {
        r.style.setProperty('--mainBackgroundColour', '#202124');
        r.style.setProperty('--mainTextColour', '#e0e8f2');
        icon.innerHTML = "light_mode";
    }
}
function toggleDarkMode() {
    var r = document.querySelector(':root');
    
    if (localStorage.getItem("darkMode") === "false") 
    {
        localStorage.setItem("darkMode","true");
        darkMode();
    } 
    else 
    {
        localStorage.setItem("darkMode","false");
        darkMode();
    }
}