const headernav =document.getElementById("header")
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');
const sections = document.querySelectorAll("section[id]");
const navbar = document.querySelector("ul.header-nav-ul");
const divs = document.querySelectorAll("section")
//////////////////////////////Scroll navbar shine/////////////////////////
window.addEventListener('scroll', function () {
    const navLinks = document.querySelectorAll('div ul li a');
    divs.forEach(function (div) {
        const divTop = div.offsetTop;
        const divHeight = div.clientHeight;

        if (pageYOffset >= (divTop - divHeight / 3)) {
            currentDiv = div.getAttribute('id');
        }
    });
    navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentDiv) {
            link.classList.add('active');
        } else {
        }
    });
});
//////////////////////////////////Video///////////////////////////////////
function playPause() {
    if (videoFile.paused) {
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('gg-play-pause')
        videoIcon.classList.remove('gg-play-button')
    }
    else {
        // Pause video
        videoFile.pause();
        // We change the icon
        videoIcon.classList.remove('gg-play-pause')
        videoIcon.classList.add('gg-play-button')

    }
}
///////////////////////////////////swiper//////////////////////////////////////
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
//////////////////////////////////Header-nav///////////////////////////////////
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("sticky");
        document.getElementById("header").classList.remove("header-nav")
    } else {
        document.getElementById("header").classList.remove("sticky");
        document.getElementById("header").classList.add("header-nav")
    }
}
/////////////////////////////////button annoucement///////////////////////////////
const button = document.getElementById("announcement-button");
const announcement = document.getElementById("announcement");

button.addEventListener("click", function () {
    event.preventDefault();
    announcement.style.display = "block";
    announcement.textContent = "Thank you for your companion";
});
//////////////////////////////////Scroll REVEAL///////////////////////////////////
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2000,
    delay: 300
});
ScrollReveal().reveal('.about__data,.video__content,.contact__description', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.home__data,.home__info,.section__title,.discover', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.about__img,.video__description,.contact__form', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.home__social a i,.place__container', { delay: 100, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.experience__data,.experience__img div img', { delay: 300, origin: 'bottom', interval: 200 });