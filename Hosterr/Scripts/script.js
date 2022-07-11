"use strict";
let isOpened = false;

addEventListener('resize', (event) => {});

onresize = (event) => {
    if (window.innerWidth >= 1150 && isOpened){
        let button = document.querySelector("#hamburger");
        closeMenu();

        button.style.display = "none"

        isOpened = false;
    }
};

function hamburgerMenu(){
    isOpened = !isOpened;

    if (isOpened){
        openMenu();
    }
    else{
        closeMenu();
    }

}

function openMenu(){
    let button = document.querySelector("#hamburger");
    button.style.display = "none"

    let menu = document.querySelector("#hamburger-menu");
    menu.style.display = "flex";

    let navbar = document.querySelector(".navbar");
    navbar.style.display = "none";

    let closeButton = document.querySelector(".close");
    closeButton.style.display = "block";
}

function closeMenu(){
    let button = document.querySelector("#hamburger");
    button.style.display = "block";

    let menu = document.querySelector("#hamburger-menu");
    menu.style.display = "none";

    let navbar = document.querySelector(".navbar");
    navbar.style.display = "flex";

    let closeButton = document.querySelector(".close");
    closeButton.style.display = "none";

    isOpened = false;
}