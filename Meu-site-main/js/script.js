// três constante para referenciar as itens e divs do projetos
/* comentário em bloco no js */
const album = document.getElementById('albumFotos');
const casamentos = document.getElementById('casamentos');
const buffet = document.getElementById('buffet');

// três constante para referenciar os ID's do iframe
const videoAlbum = document.querySelector('#videoAlbum');

// evento de click
album.addEventListener('click', () => {
    album.classList.toggle('active');
    videoAlbum.classList.toggle('active');
});
casamentos.addEventListener('click', () => {
    casamentos.classList.toggle('active');
    
});