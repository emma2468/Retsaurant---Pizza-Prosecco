//Script til burgermenu
function onLoad() {

    function toggleMenu() {
        document.querySelector(".burger").classList.toggle("change");
        document.querySelector("nav").classList.toggle("show");
    }
    document.querySelector(".burger").addEventListener("click", toggleMenu);
    document.querySelector("ul").addEventListener("click", toggleMenu);

     }

//Vil først starte når DOM-indholdet er loaded
document.addEventListener("DOMContentLoaded", function (event) {
    onLoad();
});
