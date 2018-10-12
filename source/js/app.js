let nav = document.getElementById('nav');
let menuBtn = document.getElementById('menu-btn')

menuBtn.onclick = function(e){
  e.preventDefault();

  menuBtn.classList.toggle('menu-btn--active');
  nav.classList.toggle('open');
}