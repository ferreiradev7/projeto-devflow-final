const elementsToAnimate = document.querySelectorAll('.feature-card, .plano-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
        }
    });
}, {
    threshold: 0.1
});

elementsToAnimate.forEach(element => {
    observer.observe(element);
});


const hamburguer = document.querySelector('.hamburguer-menu');
const mobileNav = document.querySelector('.mobile-nav');

hamburguer.addEventListener('click', () => {
    const bars = hamburguer.querySelectorAll('.bar');


    if (mobileNav.classList.contains('right-0')) {
        mobileNav.classList.remove('right-0');
        mobileNav.classList.add('-right-full');
    } else {
        mobileNav.classList.remove('-right-full');
        mobileNav.classList.add('right-0');
    }


    if (bars[0].style.transform) {
        bars[0].style.transform = '';
        bars[0].style.top = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
        bars[2].style.top = '';
    } else {
        bars[0].style.position = 'relative';
        bars[0].style.top = '8.5px';
        bars[0].style.transform = 'rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.position = 'relative';
        bars[2].style.top = '-8.5px';
        bars[2].style.transform = 'rotate(-45deg)';
    }
});


document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const bars = hamburguer.querySelectorAll('.bar');
        mobileNav.classList.remove('right-0');
        mobileNav.classList.add('-right-full');

        bars[0].style.transform = '';
        bars[0].style.top = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
        bars[2].style.top = '';
    });
});