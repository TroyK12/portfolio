
const classSelectors = {
    menu: document.querySelector('.nav-menu'),
    bars: document.querySelector('.fa-bars'),
    coverName: document.getElementById('cover-name'),
    splashScreen: document.getElementById('splash-screen'),
    projectBtn: document.getElementById('nav-project'),
    projects: document.getElementById('projects'),
    nameTitle: document.getElementById('name-title'),
    nameImg: document.getElementById('name-img'),
    aboutBtn: document.getElementById('nav-about'),
    aboutArea: document.getElementById('about-area'),
    closeAbout: document.getElementById('close-about'),
    submitBtn: document.getElementById('submit-btn'),
    statusArea: document.querySelector('.my-form-status'),
    form: document.querySelector('.form'),
    contactForm: document.getElementById('contact-form'),
    contactBtn: document.getElementById('nav-contact'),
    cancelBtn: document.getElementById('cancel-btn'),
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        classSelectors.coverName.classList.add('splash-screen-animation');
        setTimeout(() => {
            classSelectors.splashScreen.classList.add('splash-screen-animation-2');
            setTimeout(() => {
                classSelectors.splashScreen.classList.add('display-none');
            }, 2000)
        }, 2000)
    }, 1000)
})

classSelectors.projectBtn.addEventListener('click', () => {
    if (classSelectors.projects.classList.contains('project-invisible')) {
        classSelectors.projects.classList.remove('project-invisible');
        classSelectors.projects.classList.add('project-visible');
    } else if (classSelectors.projects.classList.contains('project-visible')) {
        classSelectors.projects.classList.remove('project-visible');
        classSelectors.projects.classList.add('project-invisible');
    } else {
        classSelectors.projects.classList.add('project-visible');
    }

    if (window.innerWidth <= 1220) {
        if (classSelectors.aboutArea.classList.contains("about-area-visible")) {
            classSelectors.aboutArea.classList.remove("about-area-visible");
            classSelectors.aboutArea.classList.add("about-area-invisible");
            setTimeout(() => {
                classSelectors.nameTitle.classList.remove("display-none");
                classSelectors.nameImg.classList.remove("display-none");
                classSelectors.aboutArea.classList.add("display-none");
                setTimeout(() => {
                    classSelectors.nameImg.classList.remove('name-img-invisible');
                    classSelectors.nameTitle.classList.remove('name-title-invisible');
                    classSelectors.nameImg.classList.add('name-img-visible');
                    classSelectors.nameTitle.classList.add('name-title-visible');
                }, 500)
            }, 1300)
        } else if (classSelectors.contactForm.classList.contains("show-form")) {
            classSelectors.contactForm.classList.remove("show-form");
            classSelectors.contactForm.classList.add("no-show-form");
            setTimeout(() => {
                classSelectors.nameTitle.classList.remove("display-none");
                classSelectors.nameImg.classList.remove("display-none");
                classSelectors.contactForm.classList.add("display-none");
                setTimeout(() => {
                    classSelectors.nameImg.classList.remove('name-img-invisible');
                    classSelectors.nameTitle.classList.remove('name-title-invisible');
                    classSelectors.nameImg.classList.add('name-img-visible');
                    classSelectors.nameTitle.classList.add('name-title-visible');
                }, 500)
            }, 1300)
        } 
    }
})

classSelectors.aboutBtn.addEventListener('click', () => {
    if (window.innerWidth <= 1234 && classSelectors.projects.classList.contains('project-visible')) {
        classSelectors.projects.classList.add('project-invisible');
        classSelectors.projects.classList.remove('project-visible');
    }

    if (classSelectors.aboutArea.classList.contains("about-area-visible") || classSelectors.nameImg.classList.contains('name-img-visible') || classSelectors.nameTitle.classList.contains('name-title-visible')) {
        classSelectors.aboutArea.classList.remove("about-area-invisible");
        classSelectors.nameImg.classList.remove('name-img-visible');
        classSelectors.nameTitle.classList.remove('name-title-visible');
    };

    if (classSelectors.contactForm.classList.contains("show-form")) {
        classSelectors.contactForm.classList.remove("show-form");
        classSelectors.contactForm.classList.add("no-show-form");
        setTimeout(() => {
            classSelectors.contactForm.classList.add("display-none");
            setTimeout(() => {
                classSelectors.aboutArea.classList.remove("display-none");
                classSelectors.aboutArea.classList.remove("about-area-invisible");
                classSelectors.aboutArea.classList.add("about-area-visible");
            }, 500)
        }, 1300)
    } else {
        classSelectors.nameImg.classList.add('name-img-invisible');
        classSelectors.nameTitle.classList.add('name-title-invisible');
        setTimeout(() => {
            classSelectors.nameTitle.classList.add("display-none");
            classSelectors.nameImg.classList.add("display-none");
            classSelectors.aboutArea.classList.remove("display-none");
            classSelectors.aboutArea.classList.add("about-area-visible");
        }, 700)
    }
})

classSelectors.closeAbout.addEventListener('click', () => {
    classSelectors.aboutArea.classList.remove("about-area-visible");
    classSelectors.aboutArea.classList.add("about-area-invisible");
    setTimeout(() => {
        classSelectors.nameTitle.classList.remove("display-none");
        classSelectors.nameImg.classList.remove("display-none");
        classSelectors.aboutArea.classList.add("display-none");
        setTimeout(() => {
            classSelectors.nameImg.classList.remove('name-img-invisible');
            classSelectors.nameTitle.classList.remove('name-title-invisible');
            classSelectors.nameImg.classList.add('name-img-visible');
            classSelectors.nameTitle.classList.add('name-title-visible');
        }, 500)
    }, 1300)
})

async function handleSubmit(event) {
    event.preventDefault();

    const status = classSelectors.statusArea;
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: classSelectors.form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.classList.add('form-status');
            status.innerHTML = 'Sent!';
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data['errors'].map(error => error['message']).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem with the form!"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = 'Oops! There was a problem with the form!'
    })
}

document.addEventListener('DOMContentLoaded', () => {
    classSelectors.form.addEventListener('submit', handleSubmit)
});

classSelectors.statusArea.addEventListener('click', () => {
    classSelectors.statusArea.classList.remove('form-status');
    classSelectors.statusArea.innerHTML = '';
});

classSelectors.contactBtn.addEventListener('click', () => {
    if (window.innerWidth <= 1234 && classSelectors.projects.classList.contains('project-visible')) {
        classSelectors.projects.classList.add('project-invisible');
        classSelectors.projects.classList.remove('project-visible');
    }

    if (classSelectors.contactForm.classList.contains("no-show-form") || classSelectors.nameImg.classList.contains('name-img-visible') || classSelectors.nameTitle.classList.contains('name-title-visible')) {
        classSelectors.contactForm.classList.remove("no-show-form");
        classSelectors.nameImg.classList.remove('name-img-visible');
        classSelectors.nameTitle.classList.remove('name-title-visible');
    };
 
    if (classSelectors.aboutArea.classList.contains("about-area-visible")) {
        classSelectors.aboutArea.classList.remove("about-area-visible");
        classSelectors.aboutArea.classList.add("about-area-invisible");
        setTimeout(() => {
            classSelectors.aboutArea.classList.add("display-none");
            setTimeout(() => {
                classSelectors.contactForm.classList.remove("display-none");
                classSelectors.contactForm.classList.add("show-form");
            }, 500)
        }, 1300)
    } else {
        classSelectors.nameImg.classList.add('name-img-invisible');
        classSelectors.nameTitle.classList.add('name-title-invisible');
        setTimeout(() => {
            classSelectors.nameTitle.classList.add("display-none");
            classSelectors.nameImg.classList.add("display-none");
            classSelectors.contactForm.classList.remove("display-none");
            classSelectors.contactForm.classList.add("show-form");
        }, 800)
    }
})

classSelectors.cancelBtn.addEventListener('click', () => {
    classSelectors.contactForm.classList.remove("show-form");
    classSelectors.contactForm.classList.add("no-show-form");
    setTimeout(() => {
        classSelectors.nameTitle.classList.remove("display-none");
        classSelectors.nameImg.classList.remove("display-none");
        classSelectors.contactForm.classList.add("display-none");
        setTimeout(() => {
            classSelectors.nameImg.classList.remove('name-img-invisible');
            classSelectors.nameTitle.classList.remove('name-title-invisible');
            classSelectors.nameImg.classList.add('name-img-visible');
            classSelectors.nameTitle.classList.add('name-title-visible');
        }, 500)
    }, 1300)
})





