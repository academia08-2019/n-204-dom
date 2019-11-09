// JEITO 1

// function mudaTexto() {
//     document.querySelector('#humilde').innerHTML = "Enviado!";
// }

// JEITO 2
// Clonar o repositório do seu projeto do Millos
// Criar pasta para js com arquivo script.js
// Conectar o script no index.html
// Adicionar botão
// Chamar o botão e passar a função onclick direto no JavaScript
    // DICA: guarde em uma (variável "botao" o document com seletor do html

// let botao = document.querySelector('button');

// function mudarBotao(){
//     botao.style.backgroundColor = 'purple';
// }

// botao.onclick = mudarBotao;

// TOGGLE

let botao = document.querySelector('button');

function tirarClass(){
    // if(botao.classList.contains('humilde')){
    //     botao.classList.remove('humilde')
    // } else {
    //     botao.classList.add('humilde')
    // }

    botao.classList.toggle('humilde')
}

botao.onclick = tirarClass;

