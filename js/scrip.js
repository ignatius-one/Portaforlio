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

// type.js
const typed = new Typed('.typed', {
    strings: ['Developer Web',' Designer Web','or..','waiit!','aa yeaa','Front end','yes'],
    typeSpeed: 80,
    startDelay: 300,
	backSpeed: 75, 
	shuffle: false,
	backDelay: 1500,
	loop: true, 
	loopCount: false,
	showCursor: true,
	cursorChar: '|', 
    contentType: 'html',
})



// progress bars 
// setInterval(() => {
//    document.getElementsByTagName('progress')[0].value =
//    document.getElementsByTagName('progress')[0].value + 1
//    if (document.getElementsByTagName('progress')[0].value === 80) {
//        document.getElementsByTagName('progress')[0].value = 1
//     }
// }, 250);
