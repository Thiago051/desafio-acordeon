// const item = document.getElementsByClassName('item')

// item[0].addEventListener('click', () => {
//     item[0].classList.add('ativo')
// })

const itemsPerguntasErespostas = document.querySelectorAll(".item");

itemsPerguntasErespostas.forEach(item => {
    item.addEventListener('click', () => {
        let itemAtivoAtual = document.querySelector('.ativo')
        
        if (itemAtivoAtual) itemAtivoAtual.classList.remove('ativo');
        
        item.classList.add('ativo');
    });
});
