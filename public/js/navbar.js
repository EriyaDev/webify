let hamburger = document.getElementById('hamburger');
let close = document.getElementById('close');
let nav = document.getElementById('navMobile');

function tampilkanNavbar(){
    nav.classList.remove('-translate-x-full');
    nav.classList.add('-translate-x-0');
}

function sembunyikanNavbar(){
    nav.classList.remove('-translate-x-0');
    nav.classList.add('-translate-x-full');
}