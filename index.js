var currentUrl = window.location.href;
var colorPrimary = "#8221AB";


function seeWorkClicked(){
    document.getElementById("projectsTitle").scrollIntoView({behavior: "smooth"});
}



if(currentUrl.includes("about.html")){
    document.getElementById("aboutLinkText").style.color = colorPrimary;
}else if(currentUrl.includes("contact.html")){
    document.getElementById("contactLinkText").style.color = colorPrimary;
}else if(currentUrl.includes("index.html") || !currentUrl.includes("html")){
    document.getElementById("homeLinkText").style.color = colorPrimary;
    document.getElementById("seeWorkButton").addEventListener("click", seeWorkClicked);
}

