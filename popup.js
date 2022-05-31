const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', ()=>{
    modal_container.classList.add('show')
alert('Abrir sitio en construcción de Andrea Lopez');
});

close.addEventListener('click', ()=>{
    modal_container.classList.remove('show')
});


