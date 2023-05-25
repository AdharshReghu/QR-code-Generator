const container = document.querySelector('.container');
const btn = container.querySelector('button');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    container.classList.add('active')});