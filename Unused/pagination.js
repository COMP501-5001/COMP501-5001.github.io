const totalPages = 8;

function scrollToTop() //from w3schools
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function paginationSetup()
{
    if (sessionStorage.getItem("teamInfoLastPage") === null)
    {
        sessionStorage.setItem("teamInfoLastPage", 1);
    }
    var page = sessionStorage.getItem("teamInfoLastPage")
    console.log("teamInfoLastPage =" + sessionStorage.getItem("teamInfoLastPage"));
    document.getElementById(page).style.display= "block";
    document.getElementById("b" + page).className = "buttonActive";
    document.getElementById("bb" + page).className = "buttonActive";
}

function setPage(page)
{
    console.log("changing page to: " + page);
    sessionStorage.setItem("teamInfoLastPage", page);
    document.getElementById(page).style.display = "block";
    document.getElementById("b" + page).className = "buttonActive";
    document.getElementById("bb" + page).className = "buttonActive";

    for (let i = 1; i <= totalPages; i++)
    {
        if (i != page)
        {
            document.getElementById("b" + i).classList.remove("buttonActive");
            document.getElementById("bb" + i).classList.remove("buttonActive");
            document.getElementById(i).style.display = "none";
        }
    }
}

function prevPage()
{
    for (let i = 1; i <= totalPages; i++)
    {
        if (document.getElementById("b" + i).classList.contains("buttonActive"))
        {
            if (i != 1)
            {
                console.log("changing page to: " + i - 1);
                sessionStorage.setItem("teamInfoLastPage", i - 1);
                setPage(i - 1);
                break;
            }
        }
    }
}

function nextPage()
{
    for (let i = 1; i <= totalPages; i++)
    {
        if (document.getElementById("b" + i).classList.contains("buttonActive"))
        {
            if (i != totalPages)
            {
                console.log("changing page to: " + i + 1);
                sessionStorage.setItem("teamInfoLastPage", i + 1);
                setPage(i + 1);
                break;
            }
        }
    } 
}