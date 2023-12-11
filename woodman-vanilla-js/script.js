
const paralax = document.getElementById('paralax');
const imgAnimation = document.getElementById('about-img');
const serviceSection = document.getElementById('service-section');
const testGroup = document.getElementById('testimonial-group');
const bars = document.getElementById('bars');
const menu = document.getElementById('menu');
const menuArea =document.getElementById('menu-area')
const menuSection =document.getElementById('menu-section')


bars.addEventListener('click', () => {
    if (menu.classList.contains('show-nav')) {
        menu.classList.remove('show-nav');
        bars.classList.remove('fa-x');
        bars.classList.add('fa-bars');
        bars.classList.remove('x-bars'); 
        setTimeout(() => {
            menuSection.classList.add('no-display')
        }, 500)
    } else {
        menuSection.classList.remove('no-display')
        menu.classList.add('show-nav');
        bars.classList.add('fa-x');
        bars.classList.remove('fa-bars');
        bars.classList.add('x-bars'); 
    }

})

menu.addEventListener('click', () => {
    menu.classList.remove('show-nav');
    bars.classList.remove('fa-x');
    bars.classList.add('fa-bars');
    bars.classList.remove('x-bars');
})

window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    paralax.style.backgroundPositionY = offset * 0.7 + 'px';
})

window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    if (offset >= 900) {
        imgAnimation.classList.remove('no-display');
        imgAnimation.classList.add('img-animation');
    };
});

const services = [
    {
        title: "Bathroom Projects",
        img: "img/bathroom.jpg",
        desc: "Browse Our gallery of our personalized Bathrooms.",
        href: "/",
        id: 1
    },
    {
        title: "Interior and Exterior Painting",
        img: "img/painters.jpg",
        desc: "Browse among our various painting projects, handled with a smooth and seemless finish.",
        href: "/",
        id: 2
    },
    {
        title: "Excavating",
        img: "img/excavating.jpg",
        desc: "Our team of excavating experts are trained and ready to tacle any challange with precision and effiency.",
        href: "/",
        id: 3
    },
    {
        title: "Windows, Siding & Doors",
        img: "img/house.jpg",
        desc: "Browse our gallery of windows, doors and siding done right the first time with a personal touch.",
        href: "/",
        id: 4
    },
    {
        title: "Deck Projects",
        img: "img/deck.jpg",
        desc: "Browse among our gallery of our costom crafted and beautifuly built desks",
        href: "/",
        id: 5
    },
    {
        title: "Kitchen Projects",
        img: "img/kitchen.jpg",
        desc: "Browse our gallery of beautifully designed kitchens",
        href: "/",
        id: 6
    }

];

document.addEventListener("DOMContentLoaded", () => {
    let cardElement = '';

    services.forEach(item => {
        cardElement += `
        <div class="card">
            <a href="${item.href}">
                <h2>${item.title}</h2>
                <img src="${item.img}" alt="${item.title}">
                <p>${item.desc}</p>
            </a>
        </div>`;
    
        serviceSection.innerHTML = cardElement;
    });
});


const testimonials = [
    {
        name: 'Jason Sackler',
        subject: 'Exemplary Craftsmanship',
        desc: 'Woodman Works exceeded all our expectations. From the initial consultation to the final nail, their attention to detail and dedication to quality craftsmanship was truly impressive. Our remodeling project was transformed into a work of art, and we couldnt be happier with the results. The Woodman Works team not only delivered on their promises but also guided us through the process with professionalism and expertise.',
        id: 1
    },
    {
        name: 'Sarah Johnson',
        subject: 'Reliable and Trustworthy',
        desc: 'Choosing Woodman Works was the best decision we made for our construction project. They proved themselves to be a highly reliable and trustworthy partner from start to finish. The open communication, adherence to timelines, and budget transparency made the entire experience stress-free. Woodman Works commitment to delivering the highest standard of service shone through in every aspect of our project.',
        id: 2
    },
    {
        name: 'Tony Hymler',
        subject: 'Exceptional Customer Service',
        desc: " Woodman Works not only builds structures but also strong relationships with their clients. Their customer service was exceptional, and they were always there to address our concerns and answer our questions. The team's dedication to ensuring our complete satisfaction was evident throughout the project, leaving us with a beautifully crafted space and a great appreciation for their professionalism and expertise. We wholeheartedly recommend Woodman Works to anyone seeking top-notch construction services.",
        id: 3
    },
]


let testimonialElement = '';

testimonials.forEach(item => {
    testimonialElement += `
        <div id="testimonials" class="testimonials">
            <h2>${item.name}</h2>
            <div>               
                <i class="yellow fa-solid fa-star"></i>
                <i class="yellow fa-solid fa-star"></i>
                <i class="yellow fa-solid fa-star"></i>
                <i class="yellow fa-solid fa-star"></i>
                <i class="yellow fa-solid fa-star"></i>
                <p>${item.subject}</p>
            </div>
            <i class="fa-solid fa-chevron-down down-arrow"></i>
        </div>
        <p id="testimonial-p" class="testimonial-p no-display">${item.desc}</p>
    `;
    
    testGroup.innerHTML = testimonialElement;

})

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonials'); 
    const testParagraphs = document.querySelectorAll('.testimonial-p'); 

    if (window.innerWidth >= 751) {
        testimonials.forEach((testimonial, index) => {
            testimonial.addEventListener('mouseenter', () => {
                testParagraphs[index].classList.add('show-test');
                testParagraphs[index].classList.remove('no-display');
            });

            testimonial.addEventListener('mouseleave', () => {
                testParagraphs[index].classList.add('no-display');
                testParagraphs[index].classList.remove('show-test');
            });
        });
    } else {
        testimonials.forEach((testimonial, index) => {
            testimonial.addEventListener('click', () => {
                testParagraphs[index].classList.toggle('show-test');
                testParagraphs[index].classList.toggle('no-display');
            });
        });
    }
});

