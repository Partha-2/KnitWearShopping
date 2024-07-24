var enter = document.getElementById("search")
var container = document.querySelector(".products-container")
var elements = container.querySelectorAll(".products")

enter.addEventListener("keyup", function (event) {
    var enterText = event.target.value.toUpperCase()

    for (var i = 0; i <= elements.length; i++) {
        if (elements[i].querySelector("p").textContent.toUpperCase().indexOf(enterText) < 0) {
            elements[i].style.display = "none"
        }
        else {
            elements[i].style.display = "block"
        }
    }
})

var navbar=document.querySelector(".navbar-toggle")
var sideNavbar=document.querySelector(".side-navbar-links")

function showAll(){
    sideNavbar.style.left="0%";
}

function hideAll(){
    sideNavbar.style.left="-60%";
}