const totalPages = 8;

function paginationSetup()
{
    if (localStorage.getItem("teamInfoLastPage") === null)
    {
        localStorage.setItem("teamInfoLastPage", 1);
    }
    var page = localStorage.getItem("teamInfoLastPage")
    console.log("teamInfoLastPage =" + localStorage.getItem("teamInfoLastPage"));
    document.getElementById(page).style.display= "block";
    document.getElementById("b" + page).className = "buttonActive";
}

function setPage(page)
{
    console.log("changing page to: " + page);
    localStorage.setItem("teamInfoLastPage", page);
    document.getElementById(page).style.display = "block";
    document.getElementById("b" + page).className = "buttonActive";

    for (let i = 1; i <= totalPages; i++)
    {
        if (i != page)
        {
            document.getElementById("b" + i).classList.remove("buttonActive");
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
                localStorage.setItem("teamInfoPage", i - 1);
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
                localStorage.setItem("teamInfoLastPage", i + 1);
                setPage(i + 1);
                break;
            }
        }
    } 
}