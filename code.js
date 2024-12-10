let attempts = 0;

const moveButton = document.getElementById('moveButton');
const photoContainer = document.getElementById('photoContainer');
const message = document.getElementById('message');

// Função para mostrar fotos em queda
function showPhotos() {
    message.style.display = 'block';

    const img = document.createElement('img');
    img.src = `imagens/foto${Math.floor(Math.random() * 10) + 1}.jpeg`; // Caminho atualizado para as imagens
    img.className = 'photo';

    img.style.left = `${Math.random() * (window.innerWidth - 100)}px`; // Ajuste conforme necessário
    img.style.top = `0px`; // Começa no topo

    photoContainer.appendChild(img);

    img.style.animation = 'fall 2s forwards'; // Dura 2 segundos e mantém a posição final
    img.style.opacity = '1'; // Torna visível durante a animação

    setTimeout(() => {
        photoContainer.removeChild(img);
    }, 2000); // Tempo igual à duração da animação
}

// Evento de mouse sobre o botão
moveButton.addEventListener('mouseover', () => {
    if (attempts < 9) { // Muda de lugar até 10 vezes (0 a 9)
        const x = Math.random() * (window.innerWidth - moveButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - moveButton.offsetHeight);
        moveButton.style.position = 'absolute';
        moveButton.style.left = `${x}px`;
        moveButton.style.top = `${y}px`;
        attempts++;
    } else {
        moveButton.style.position = 'static';
        moveButton.innerText = 'Clique aqui!';
        moveButton.removeEventListener('mouseover', this);
        moveButton.addEventListener('click', startInfinitePhotos);
    }
});

// Função para iniciar o efeito infinito
function startInfinitePhotos() {
    setInterval(showPhotos, 500); // Chama showPhotos a cada 500 milissegundos
}