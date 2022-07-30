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
/* для блока с процентами */
  const input = document.querySelectorAll('.lang__numb');
        width1 = document.querySelectorAll('.lang__novis');
        function calc() {
          input.forEach((item,i)=>{
            item.addEventListener('input',()=>{
              width1[i].style.width = `${input[i].value}`;
            })
          })
        }
        calc()
       

})