/* sidebar menu c/o w3schools.com */


function toggleNav() {
    var x = document.getElementById("sidebarMenu");
    var icon = document.getElementById("menuButtonIcon");
    
    if (x.style.width === "0px") 
    {
        x.style.width = "250px";
        icon.innerHTML = "close";
    } 
    else 
    {
        x.style.width = "0px";
        icon.innerHTML = "menu";
    }
    
    var x = document.getElementById("main");
    if (x.style.marginLeft === "0px") 
    {
        x.style.marginLeft = "250px";
        icon.innerHTML = "close";
    } 
    else 
    {
        x.style.marginLeft = "0px";
        icon.innerHTML = "menu";
    }
}

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

function pageSetup() {
    document.getElementById("sidebarMenu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    darkMode();
}