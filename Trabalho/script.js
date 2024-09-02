// Configurações para criar as gotas de chuva
const rain = document.querySelector('.rain');

function createDrop() {
    const drop = document.createElement('div');
    drop.classList.add('drop');

    // Define a posição inicial e a velocidade da gota
    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDuration = Math.random() * 2 + 3 + 's';

    // Adiciona a gota na tela
    rain.appendChild(drop);

    // Remove a gota após a animação terminar
    setTimeout(() => {
        drop.remove();
    }, 5000);
}

// Cria várias gotas em intervalos
setInterval(createDrop, 100);
