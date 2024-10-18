var data = new Date();

data = data.getFullYear();

document.getElementById('data-atual').innerHTML = data;


document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".citacao p"); // Seleciona os parágrafos da citação
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
        }, index * 1500); // Controla o tempo de exibição gradual de cada linha
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const ceu = document.getElementById('ceu');
    const totalEstrelas = 5000; 

    for (let i = 0; i < totalEstrelas; i++) {
        let estrela = document.createElement('div');
        estrela.classList.add('estrela');
        
        // Tamanho aleatório das estrelas
        let size = Math.random() * 2 + 1 + 'px';
        estrela.style.width = size;
        estrela.style.height = size;

        // Posição inicial aleatória das estrelas
        estrela.style.top = Math.random() * 100 + 'vh';
        estrela.style.left = Math.random() * 100 + 'vw';

        // Velocidade de movimento aleatória para cada estrela
        let duracao = Math.random() * 20 + 5 + 's';
        estrela.style.animationDuration = duracao;

        // Adiciona ao céu
        ceu.appendChild(estrela);
    }
});


