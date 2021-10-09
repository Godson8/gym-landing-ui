const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');

//navbar toggle icon
let i = 1;
navToggle.addEventListener('click', function(){
    i++;
    if (i % 2 === 0){
        navToggle.classList.add('open');
        navMenu.style.right = 0;
    }else{
        navToggle.classList.remove('open');
        navMenu.style.right = '-100%';
    };
})

// remove nav bar on navlink click
navLinks.forEach(function(navLink){
    navLink.addEventListener('click', function(){
        navToggle.classList.remove('open');
        navMenu.style.right = '-100%';
    })
})


//Scroll reveal for all elements as you scroll down.
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})

sr.reveal(`.main__content, .main__button, .headline, .welcome__message, .offers, .plans__message, .plans, .trainer__message,.testimonial__message, .bottom__logo, .testimony, .info, .footer__end`,{
    origin: 'top',
    interval: 150,
})

sr.reveal(`.trainer__img1, .trainer__img3`,{
    origin: 'left',
    interval: 150,
})

sr.reveal(`.trainer__img2, .trainer__img4`,{
    origin: 'right',
    interval: 150,
})
