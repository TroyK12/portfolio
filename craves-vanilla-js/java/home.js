

const barsBtn = document.getElementById('js-bars-btn');
const navMenu = document.getElementById('js-nav-menu');


barsBtn.addEventListener('click', () => {
    if (navMenu.classList.contains('toggle') && barsBtn.classList.contains('fa-bars')) {
        navMenu.classList.remove('toggle');
        barsBtn.classList.remove('fa-bars');
        barsBtn.classList.add('fa-xmark');
    } else {
        navMenu.classList.add('toggle');
        barsBtn.classList.add('fa-bars');
        barsBtn.classList.remove('fa-xmark');
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        navMenu.classList.remove('toggle');
    } else {
        navMenu.classList.add('toggle');
    }
})

window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 900) {
        navMenu.classList.add('toggle');
    }   
}) 


const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].style.display = 'none';
    slides[index].style.display = 'block';
    currentSlide = index;
}

function nextslide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

setInterval(nextslide, 3000);

