
document.getElementById('changes-icon').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('show-menu')
    document.getElementById('changes-icon').classList.toggle('bar-x')
})

let position = window.pageYOffset;
let nav = document.getElementById('nav');
window.addEventListener('scroll', function () {
    adress = this.window.pageYOffset
    if (position >= adress) {
        nav.style.top = '0'
    } else {
        nav.style.top = '-5em'
    }
    position = adress
})



document.getElementById('dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-active')
    document.getElementById('dark-mode').classList.toggle('change')
})