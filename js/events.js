const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(){
    title.style.color="blue";
}

function handleMouseEnter(){
    console.log('mouse is here!')
}

function handleWindowResize() {
    document.body.style.backgroundColor="event";
}

function handleWindowCopy() {
    alert("copier!")
}

function handleWindowOffline() {
    alert("SOS on WIFI!")
}

function handleWindowOnline() {
    alert("ALL GOOOD")
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);