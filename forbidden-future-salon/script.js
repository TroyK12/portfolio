
const background = document.getElementById('background-img');
const navArea = document.getElementById('main-nav');
const photoMessage = document.getElementById('messages');
const serviceItem1 = document.getElementById('service-item-1');
const serviceItem2 = document.getElementById('service-item-2');
const serviceItem3 = document.getElementById('service-item-3');
const serviceItem4 = document.getElementById('service-item-4');
const slogan = document.getElementById('slogan');
const sloganImg = document.getElementById('slogan-img');
const bars = document.getElementById('bars');
const barsArea = document.getElementById('bars-area');
const menu = document.getElementById('sliding-nav')
const product1 = document.getElementById('product-img1')
const product2 = document.getElementById('product-img2')
const product3 = document.getElementById('product-img3')




bars.addEventListener('click', () => {
    if (menu.classList.contains('show-nav')) {
        removeNav()                
    } else {
        menu.classList.add('show-nav');
        bars.classList.add('fa-x');
        bars.classList.remove('fa-bars');
        bars.classList.add('x-bars'); 
    }
})

menu.addEventListener('click', () => {
    removeNav()
})

function removeNav() {
    menu.classList.remove('show-nav');
    bars.classList.remove('fa-x');
    bars.classList.add('fa-bars');
    bars.classList.remove('x-bars');
}


const images = ['female-main1.jpg', 'male-main.WEBP', 'salon-interior1.jpg']; 
const messages = ['Style Your Future', 'Styles For Men & Women', 'Products Made For You'];
let currentIndex = 0;

function changeBackground() {
    background.style.opacity = 0;
    photoMessage.style.opacity = 0;
    photoMessage.style.transform = 'translateY(10%)';

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        background.style.backgroundImage = `url('img/${images[currentIndex]}')`;
        background.style.opacity = 1;
        
        setTimeout(() => {
            photoMessage.textContent = messages[currentIndex];
            photoMessage.style.opacity = 1;
            photoMessage.style.transform = 'translateY(0)';
        }, 1000)
    }, 800);
}

function startingBackground() {
    background.style.backgroundImage = `url('img/${images[currentIndex]}')`;
    photoMessage.style.opacity = 0;
    photoMessage.style.transform = 'translateY(10%)';
    setTimeout(() => {
        photoMessage.textContent = messages[currentIndex];
        photoMessage.style.opacity = 1;
        photoMessage.style.transform = 'translateY(0)';
    }, 800)
};

startingBackground();


setInterval(changeBackground, 5000); 

window.addEventListener('scroll', () => {
    mainPhotoOffset(); 
    sloganPhotoOffset();
    navShrink();

    if (window.innerWidth >= 650) {
        servicesPhotos();
        sloganFade();  
        productPhotos();
    } else {
        servicesPhotosPhone();
        sloganFadePhone();
        productPhotosPhone();
    }
})

window.addEventListener('click', () => {
    if (!menu.classList.contains('display-none')) {
        removeNav()
    }
})

function mainPhotoOffset() {
    const offset = window.pageYOffset;
    background.style.backgroundPositionY = offset * 0.7 + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 650) {
        navArea.style.height = '100px'
    } else {
        navArea.style.height = '150px'
    }
})

function navShrink() {
    const windowYaxis = window.scrollY;
    if (windowYaxis > 200 && window.innerWidth >= 651) {
        navArea.style.height = '80px';
    } else if (windowYaxis < 200 && window.innerWidth >= 651) {
        navArea.style.height = '150px';
    } else if (windowYaxis > 200 && window.innerWidth <= 650) {
        navArea.style.height = '80px';
    } else if (windowYaxis < 200 && window.innerWidth <= 650) {
        navArea.style.height = '100px';
    };
};

function servicesPhotos() {
    const offset = window.pageYOffset;
    serviceItem1.style.opacity = 0;
    serviceItem2.style.opacity = 0;
    serviceItem3.style.opacity = 0;
    serviceItem4.style.opacity = 0;
    serviceItem1.style.transform = 'translateY(30%)';
    serviceItem2.style.transform = 'translateY(30%)';
    serviceItem3.style.transform = 'translateY(30%)';
    serviceItem4.style.transform = 'translateY(30%)';
    if (offset >= 420) {
        serviceItem1.style.opacity = 1;
        serviceItem2.style.opacity = 1;
        serviceItem3.style.opacity = 1;
        serviceItem4.style.opacity = 1;
        serviceItem1.style.transform = 'translateY(0)';
        serviceItem2.style.transform = 'translateY(0)';
        serviceItem3.style.transform = 'translateY(0)';
        serviceItem4.style.transform = 'translateY(0)';
    }
}

function servicesPhotosPhone() {
    const offset = window.pageYOffset;
    serviceItem1.style.opacity = 0;
    serviceItem2.style.opacity = 0;
    serviceItem3.style.opacity = 0;
    serviceItem4.style.opacity = 0;
    serviceItem1.style.transform = 'translateY(30%)';
    serviceItem2.style.transform = 'translateY(30%)';
    serviceItem3.style.transform = 'translateY(30%)';
    serviceItem4.style.transform = 'translateY(30%)';
    if (offset >= 450) {
        serviceItem1.style.opacity = 1;
        serviceItem1.style.transform = 'translateY(0)';
    }
    if (offset >= 660) {
        serviceItem2.style.opacity = 1;
        serviceItem2.style.transform = 'translateY(0)';
    }
    if (offset >= 900) {
        serviceItem3.style.opacity = 1;
        serviceItem3.style.transform = 'translateY(0)';
    }
    if (offset >= 1140) {
        serviceItem4.style.opacity = 1;
        serviceItem4.style.transform = 'translateY(0)';
    }
}

function sloganFade() {
    const offset = window.pageYOffset;
    slogan.style.opacity = 0;
    slogan.style.transform = 'scale(0%)';
    if (offset >= 740) {
        slogan.style.opacity = 1;
        slogan.style.transform = 'scale(100%)';
    }
}

function sloganFadePhone() {
    const offset = window.pageYOffset;
    slogan.style.opacity = 0;
    slogan.style.transform = 'scale(0%)';
    if (offset >= 1530) {
        slogan.style.opacity = 1;
        slogan.style.transform = 'scale(100%)';
    }
}

function sloganPhotoOffset() {
    const offset = window.pageYOffset;
    sloganImg.style.backgroundPositionX = offset * 0.1 + 'px';
}

function productPhotos() {
    const offset = window.pageYOffset;
    product1.style.opacity = 0;
    product2.style.opacity = 0;
    product3.style.opacity = 0;
    if (offset >= 1150) {product1.style.opacity = 1}

    if (offset >= 1250) {product2.style.opacity = 1}

    if (offset >= 1300){ product3.style.opacity = 1}
}

function productPhotosPhone() {
    const offset = window.pageYOffset;
    product1.style.opacity = 0;
    product2.style.opacity = 0;
    product3.style.opacity = 0;
    if (offset >= 2000) {product1.style.opacity = 1}

    if (offset >= 2550) {product2.style.opacity = 1}

    if (offset >= 3200){ product3.style.opacity = 1}
}

