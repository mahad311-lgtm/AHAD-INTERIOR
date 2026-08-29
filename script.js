/* =========================================================
   AHAD INTERIORS
   Main Website JavaScript
========================================================= */


/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.add("open");

    document.body.style.overflow = "hidden";

});

closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

    document.body.style.overflow = "";

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        document.body.style.overflow = "";

    });

});


/* =========================================================
   HERO SLIDER
========================================================= */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");
const slideNumber = document.getElementById("slideNumber");

let currentSlide = 0;
let sliderTimer;


function showSlide(index) {

    slides.forEach((slide, i) => {

        slide.classList.toggle(
            "active",
            i === index
        );

    });


    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });


    slideNumber.textContent =
        String(index + 1).padStart(2, "0");

    currentSlide = index;

}


function nextSlide() {

    let next = currentSlide + 1;

    if (next >= slides.length) {

        next = 0;

    }

    showSlide(next);

}


function startSlider() {

    sliderTimer = setInterval(
        nextSlide,
        5500
    );

}


function restartSlider() {

    clearInterval(sliderTimer);

    startSlider();

}


dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

        restartSlider();

    });

});


showSlide(0);
startSlider();


/* =========================================================
   SAMPLE FILTER
========================================================= */

const filters = document.querySelectorAll(".filter");
const galleryItems = document.querySelectorAll(".gallery-item");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {

            item.classList.remove("active");

        });

        filter.classList.add("active");


        const selected =
            filter.getAttribute("data-filter");


        galleryItems.forEach(item => {

            const category =
                item.getAttribute("data-category");


            if (
                selected === "all" ||
                selected === category
            ) {

                item.classList.remove("hidden");

            } else {

                item.classList.add("hidden");

            }

        });

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .service-card, .gallery-item, .project-large, .project-small, .why-item, .contact-card"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId === "#" ||
            !document.querySelector(targetId)
        ) {
            return;
        }

        event.preventDefault();


        const target =
            document.querySelector(targetId);


        const offset = 70;


        const position =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            offset;


        window.scrollTo({

            top: position,

            behavior: "smooth"

        });

    });

});


/* =========================================================
   PREVENT IMAGE DRAGGING
========================================================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("dragstart", event => {

        event.preventDefault();

    });

});
