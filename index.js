var currentUrl = window.location.href;

if(currentUrl.includes("about.html")){
    console.log("At About!");
}else if(currentUrl.includes("contact.html")){
    console.log("At Contact!");
}else if(currentUrl.includes("index.html")){
    console.log("At Index!");
}