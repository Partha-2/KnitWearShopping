var navbar = document.querySelector(".navbar-toggle")
var sideNavbar = document.querySelector(".side-navbar-links")

function showAll() {
    sideNavbar.style.left = "0%";
}

function hideAll() {
    sideNavbar.style.left = "-60%";
}

var btn = document.querySelectorAll(".btn")
var cartDetails = document.querySelector(".cart-details")
var trending = document.querySelector(".trending-collections")
var elements = trending.querySelectorAll(".trending-container")

function buy(event) {
    for (var i = 0; i <= elements.length; i++)
    {
        if (elements[i].querySelector("button") == (event.target)) 
        {
            var clone=elements[i].cloneNode(true)
    
            clone.insertAdjacentHTML("beforeend",`<button onclick="Remove(event)">remove</button>`)

            cartDetails.appendChild(clone)
        }
    }
}

function Remove(event){
    event.target.parentElement.remove()
}

var overlay=document.querySelector(".overlay")

function showCart()
{
    overlay.style.display="block"
    cartDetails.style.left="70%"
}
function exit()
{
    overlay.style.display="none"
    cartDetails.style.left="-70%"
}