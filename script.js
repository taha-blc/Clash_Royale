let menu = document.querySelector('#menu-icon')
let navmenu = document.querySelector('.navmenu')


menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navmenu.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '40px',
    duration: 2400,
    reset: true
})

sr.reveal('.logo', { delay: 100, origin: 'left' });
sr.reveal('.navmenu', { delay: 200, origin: 'bottom' });
sr.reveal('.hero-text span', { delay: 250 });
sr.reveal('.hero-text h5', { delay: 300, origin: 'top' });
sr.reveal('.hero-text h1', { delay: 300, origin: 'top' });
sr.reveal('.hero-text p', { delay: 350, origin: 'bottom' });
sr.reveal('.hero-img img', { delay: 400, origin: 'right' });


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('You can not access the codes this way')
});