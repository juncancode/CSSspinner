document.querySelector('.main').style.opacity = 0;
document.querySelector('body').classList.add('spinner-3');

// Mimic server request

setTimeout(() => {
    document.querySelector('body').classList.remove('spinner-3');  
    document.querySelector('.main').classList.add('fadeIn');  
}, 2000);