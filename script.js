/*---------Menu Toggle Function-------*/
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/*---------Dark Mode Toggle--------*/
const body = document.querySelector("body"),
      toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

/*--------Typing Effect-----*/
var typingEffect = new Typed("#typedText", {
    strings: ["Designer", "Coder"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

/*-------Scroll Reveal Animation---------*/

// Scroll animation for ABOUT section
ScrollReveal().reveal(".about-info", {
    origin: "left",
    distance: "60px",
    duration: 1500,
    delay: 100
});
ScrollReveal().reveal(".skill-box", {
    origin: "right",
    distance: "60px",
    duration: 1500,
    delay: 200,
    interval: 100
});

// Scroll animation for PROJECT section
ScrollReveal().reveal(".project-container", {
    origin: "bottom",
    distance: "60px",
    duration: 1500,
    delay: 100
});

// Scroll animation for CONTACT section
ScrollReveal().reveal(".contact-info", {
    origin: "left",
    distance: "60px",
    duration: 1500,
    delay: 100
});
ScrollReveal().reveal(".form-control", {
    origin: "right",
    distance: "60px",
    duration: 1500,
    delay: 200
});


/*------Active Link on Scroll-----*/
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        const navLink = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add("active-link");
        } else {
            navLink.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);
