"use strict"
// Nav Mobile
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', function () {
    const navMobile = document.querySelector('.nav-mobile');
    navMobile.classList.toggle('hidden')
})

// New Swiper
var swiper = new Swiper(".news-swiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// Opportunities Swiper
var swiper = new Swiper(".opportunities-swiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
        nextEl: ".button-next-2",
        prevEl: ".button-prev-2",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// FAQ Accordion
const accordionItem = document.querySelectorAll(".accordion .accordion-item");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (let i = 0; i < accordionItem.length; i++) {
        accordionItem[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

accordionItem.forEach(item => item.addEventListener('click', toggleAccordion));

// Update footer Year
const currentYear = document.querySelector('.current-year');
currentYear.textContent = new Date().getFullYear()

// Hero Video Modal
const showModal = document.querySelector('.show-hero-modal');
const heroModal = document.querySelector('.hero-modal-video');
const closeModal = document.querySelector('.close-hero-modal');
const modalVideo = document.querySelector('.hero-modal-video video')

showModal.addEventListener('click', () => {
    heroModal.classList.toggle('active');
    modalVideo.play();
})

closeModal.addEventListener('click', () => {
    heroModal.classList.toggle('active');
    modalVideo.load();
})

// Calc Accordion
const accordionHeading = document.querySelectorAll('.acc-heading');

function toggleCalcAccordion() {
    const accordionItem = document.querySelectorAll('.calc-acc-item');
    const thisItem = this.parentNode;

    accordionItem.forEach(accItem => {
        if (thisItem == accItem) {
            thisItem.classList.toggle('is-open');
            return;
        }
        accItem.classList.remove('is-open');
    });
};
accordionHeading.forEach(trigger => trigger.addEventListener('click', toggleCalcAccordion));