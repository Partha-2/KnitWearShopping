var navbar=document.querySelector(".navbar-toggle")
var sideNavbar=document.querySelector(".side-navbar-links")

function showAll(){
    sideNavbar.style.left="0%";
}

function hideAll(){
    sideNavbar.style.left="-60%";
}

var contactBox=document.querySelector(".contact-box")
var end=document.querySelector(".end")
var footerEnd=document.querySelector(".footer-end")

function submit1(){
    contactBox.style.display="none"
    end.style.display="block";
    footerEnd.style.display="block";
}