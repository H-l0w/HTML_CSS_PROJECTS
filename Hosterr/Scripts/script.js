"use strict";
let isOpened = false;

addEventListener('resize', (event) => {});

onresize = (event) => {
    if (window.innerWidth >= 1160 && isOpened){
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
    let menu = document.querySelector("#hamburger-menu");
    let navbar = document.querySelector(".navbar");
    let closeButton = document.querySelector(".close");

    button.style.display = "none"
    menu.style.display = "flex";
    navbar.style.display = "none";
    closeButton.style.display = "block";
}

function closeMenu(){
    let button = document.querySelector("#hamburger");
    let menu = document.querySelector("#hamburger-menu");
    let navbar = document.querySelector(".navbar");    
    let closeButton = document.querySelector(".close");


    button.style.display = "block";
    menu.style.display = "none";
    navbar.style.display = "flex";
    closeButton.style.display = "none";
    isOpened = false;
}