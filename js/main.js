const menuBars = document.getElementsByClassName('menu-bars')[0];
const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
const header = document.getElementById('header');
const closeBtn = document.getElementById('hamBtn');

menuBars.addEventListener('click', () => {
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.style.display = 'none';
    mobileMenu.classList.remove('open');
    header.classList.remove('active');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    mobileMenu.style.display = 'flex';
    mobileMenu.classList.add('open');
    header.classList.add('active');
    closeBtn.innerHTML = '<i id="hamBtn" class="fas fa-bars"></i>';
  }
});
