let btn = document.getElementById('btn')
let bobik = document.getElementById('bobik')
let btn_close = document.getElementById('btn_close')

btn.addEventListener('click', () => {
    bobik.style.display = 'block';
    
    bobik.play();
});

btn_close.addEventListener('click', () => {
    bobik.style.display = 'none';
    
    
});