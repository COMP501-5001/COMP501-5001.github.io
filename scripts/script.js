function pageSetup() {
    document.getElementById("sidebarMenu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    darkMode();
}

function clearStorage()
{
    sessionStorage.clear();
    localStorage.clear();
    alert("All data stored by this website has been cleared. However, reloading or accessing another page will cause new data to be created. If you don't want this, close the website after closing this alert message.");
}