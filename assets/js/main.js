/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img,.about__cards, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


// letter animation

const names = [ "Web Designer","Java Full Stack Developer","Back-End Developer"];
const nameElement = document.getElementById('dynamic-name');
let nameIndex = 0;
let letterIndex = 0;
let currentName = '';
let isDeleting = false;
const speed = 80; // Speed of the typing effect

function type() {
    const fullName = names[nameIndex];
    if (isDeleting) {
        // Remove letters
        currentName = fullName.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        // Add letters
        currentName = fullName.substring(0, letterIndex + 1);
        letterIndex++;
    }

    nameElement.textContent = currentName;

    if (!isDeleting && letterIndex === fullName.length) {
        // Pause at the end of the name
        setTimeout(() => isDeleting = true, 100);
    } else if (isDeleting && letterIndex === 0) {
        // Move to the next name
        isDeleting = false;
        nameIndex = (nameIndex + 1) % names.length;
    }

    setTimeout(type, speed);
}

// Start typing animation
type();
