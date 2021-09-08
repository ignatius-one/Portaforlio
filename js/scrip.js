// Aos 
    AOS.init();

// change icon 
document.getElementById('changes-icon').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('show-menu')
    document.getElementById('changes-icon').classList.toggle('bar-x')
})

// hidden nav 
let position = window.pageYOffset;
let nav = document.getElementById('nav');
window.addEventListener('scroll', function () {
    if (screen.width < 929) {
       
    } else {
        adress = this.window.pageYOffset
        if (position >= adress) {
            nav.style.top = '0'
        } else {
            nav.style.top = '-5em'
        }
        position = adress
    }
})


// my dark mode 
document.getElementById('dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-active')
    document.getElementById('dark-mode').classList.toggle('change')
})

