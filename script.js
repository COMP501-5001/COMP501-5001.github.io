/* sidebar menu c/o w3schools.com */

function setNav() {
    document.getElementById("sidebarMenu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function toggleNav() {
    var x = document.getElementById("sidebarMenu");
    var icon = document.getElementById("menuButtonIcon")
    if (x.style.width === "0px") {
      x.style.width = "250px";
      icon.innerHTML = "close";
    } else {
      x.style.width = "0px";
      icon.innerHTML = "menu";
    }
    var x = document.getElementById("main");
    if (x.style.marginLeft === "0px") {
      x.style.marginLeft = "250px";
      icon.innerHTML = "close";
    } else {
      x.style.marginLeft = "0px";
      icon.innerHTML = "menu";
    }
  }