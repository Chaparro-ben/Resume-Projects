const primaryHeader = document.querySelector('.primary-header')
const thirdHeader = document.querySelector('.third-header_scroll-down')
const scrollUp = document.querySelector('.fa-arrow-up');
const scrollWatcher = document.createElement('div');

// SCROLL WATCHER
scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
}, {rootMargin: "200% 0px 0px 0px"}); 

navObserver.observe(scrollWatcher);

const thirdObserver = new IntersectionObserver((entries) => {
    thirdHeader.classList.toggle('sticky', !entries[0].isIntersecting)
}, {rootMargin: "370% 0px 0px 0px"});

thirdObserver.observe(scrollWatcher);

const scrollUpObserver = new IntersectionObserver((entries) => {
    scrollUp.classList.toggle('sr-up', !entries[0].isIntersecting)
}, {rootMargin: "4000px 0px 0px 0px"});

thirdObserver.observe(scrollWatcher);

// FADE IN ANIMATION
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 650,
    reset: true
});

sr.reveal('#fade_in--top', {delay:200, origin:'left'});
sr.reveal('#fade_in_top--img', {delay:450, origin:'right'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll', {delay:550, origin:'right'});

// OPEN/CLOSE BUTTON AND CHANGE NAV HEIGHT
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav__link--list');
let nav = document.querySelector("#nav__height")
function openMenu() {
    document.body.classList += " menu--open";
    nav.classList.toggle("nav__height-100")
};

function closeMenu() {
    document.body.classList.remove('menu--open');
    nav.classList.remove("nav__height-100")
}