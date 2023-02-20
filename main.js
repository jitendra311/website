let openNav = document.querySelector(".openNav");
let closeNav = document.querySelector(".close");
let navbar = document.querySelector(".navbar");


// open navigation bar
openNav.addEventListener("click", ()=>{
    navbar.style.display = "block";
});
// close navigation bar
closeNav.addEventListener("click", ()=>{
    navbar.style.display = "none";
});