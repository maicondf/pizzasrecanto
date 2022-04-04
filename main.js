// expandi e fecha o menu com as opções quando em modo mobile
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

// esconde menu ao clicar em um item do menu.
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

// coloca uma box-shadow no header da página quando der scroll
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
    if (this.window.scrollY >= navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

// Testimonials carousel sliner swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

// Scroolreveal: Mostra elementos quando usar o scroll na página

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, { interval: 100 })


//  Botão que leva ao topo
const backTopButton = document.querySelector('.back-to-top')
function backToTop() {

    if (this.window.scrollY >= 560) {
        backTopButton.classList.add('show');
    } else {
        backTopButton.classList.remove('show');
    }
}

// Menu ativado referente a seção que está visível na tela.
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for ( const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}

// when Scroll
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection()
})