// Hamburger menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth >= 1150) {
        // Remove mobile menu settings for larger screens
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "none";
    }

    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
});

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)


// // Dynamically Update Active State
// const menuItem = document.querySelectorAll(".menuItem");

// menuItems.forEach(item => {
//     item.addEventListener("click", () => {
//         menuItems.forEach(link => link.classList.remove("active")); // Remove active class from all
//         item.classList.add("active"); // Add active class to clicked link
//     });
// });

// Add shadow to the header
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
 }
 window.addEventListener('scroll', shadowHeader)
