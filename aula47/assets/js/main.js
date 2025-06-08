// logo abaixo vamos capturar o evento de click porem temos de chamar os elementos 
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

// Precisamos de uma variável para armazenar o tempo em segundos então vamos utilizar o let
let segundos = 0;
let timer;
// agora eu preciso criar uma função que vai formatar a hora e data do date para que nao
// seja utilizado a hora e data do meu computador ok 
// Aqui você está criando uma função com o nome criaHoraDosSegundos, e ela recebe um número de segundos como entrada.
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); // Date trabalha com milissegundos.
// Como 1 segundo = 1000 milissegundos, você multiplica os segundos por 1000.
return data.toLocaleTimeString('pt-BR', {  //Aqui você está pegando a hora formatada da data criada, mas pedindo que:
//'pt-BR': use o formato brasileiro (24 horas)
hour12: false,  //hour12: false: não use AM/PM (use 13h, 14h, 15h etc)
timeZone: 'UTC' //timeZone: 'UTC': isso faz o JavaScript começar do zero (00:00:00), e não usar a hora do computador

});
};
// ASSIM QUE EU CLICAR EM INCIAR EU VOU PRECISAR QUE MEU RELÓGIO SEJA INICIADO 
// E COMO POSSO FAZER ISSO ? ISSO TEREI DE CRIAR UMA NOVA Function
function iniciarRelogio() {
   timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
};
// agora vamos fazer com que o evento seja adicionado a uma lista de eventos ok 
iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer); // aqui é que ja tiver um outro timer ativo eles nao fiquem' rodando os dois ao mesmo tempo'
    iniciarRelogio();
});
// agora vamos fazer com que o evento seja adicionado a uma lista de eventos ok 
pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});
// agora vamos fazer com que o evento seja adicionado a uma lista de eventos ok 
zerar.addEventListener('click', function() {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;

});


// // UMA DICA SE HOUVE-SE MAIS BOTÕES PARA MAIS OPÇÕES EU PODERIA UTILIAR O 
// document.addEventListener('click', function(e) {
//     if 
// });