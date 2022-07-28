'Use strict'
window.addEventListener('DOMContentLoaded',()=>{
  const gamburger = document.querySelector('.gamburger');
        leftMenu = document.querySelector('.left-menu');
        close = document.querySelector('.left-menu__close');
        overlay = document.querySelector('.overlay');
    
        gamburger.addEventListener('click', ()=>{
          leftMenu.classList.add('left-menu_active');
          overlay.style.display = 'block';
        })
        close.addEventListener('click', ()=>{
          leftMenu.classList.remove('left-menu_active');
          overlay.style.display = 'none';
        })
})