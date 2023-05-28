const container = document.querySelector('.container');
const btn = container.querySelector('button');
const input = container.querySelector('form input');
const image = container.querySelector('.Qr img');
const qrsize='200x200'
const url = 'https://api.qrserver.com/v1/create-qr-code/';
async function getImage (e){
    e.preventDefault();
    const inputValue = input.value;
    if(!inputValue){
        return
    }
    btn.innerText='Generating QR Code....';
    const response =  await fetch(`${url}?data=${inputValue}&size=${qrsize}`);
    const source = response.url
    image.src= source;
    
    image.addEventListener('load',()=>{
        btn.innerText='Generate QR Code';
        container.classList.add('active')
    })
}
btn.addEventListener('click',getImage);

input.addEventListener('keyup',()=>{
    if(!input.value){
        container.classList.remove('active');
    }
})
