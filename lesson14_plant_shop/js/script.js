let burger = document.querySelector('.burger')
let header = document.querySelector('.header')

burger.addEventListener('click', () => {
    header.classList.toggle('open');
})