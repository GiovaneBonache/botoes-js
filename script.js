const botoes = document.querySelectorAll('.bnt-color');
const imagem = document.getElementById('imagem');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        botoes.forEach(b => {
            b.classList.remove('active')
            b.style.removeProperty('--cor')
        });

        botao.classList.add('active');

        const cor = botao.dataset.color;

        botao.style.setProperty('--cor', cor);
        imagem.src = botao.dataset.img;

    });

});

if (botoes.length > 0) {
    const primeiro = botoes[0];

    primeiro.classList.add('active');
    primeiro.style.setProperty('--cor', primeiro.dataset.color);
}