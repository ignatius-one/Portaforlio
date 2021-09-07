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


function openPage(pageName) {
  // Hide all elements with class="tabcontent" by default */
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen").click();