const questaoTextoElemento = document.getElementById('questao-em-texto');
const trueButton = document.getElementById('true-btn');
const falseButton = document.getElementById('false-btn');
const feedbackTextoElemento = document.getElementById('feedback-texto');
// CORREÇÃO: 'feedbackTexto' foi renomeado para 'feedbackTextoElemento' para ser consistente com 'questaoTextoElemento'.
// ERRO ANTERIOR: Você declarou como 'feedbackTexto', mas usaria 'feedbackTextElement' mais abaixo, o que causaria um erro de variável não definida.
// CORREÇÃO: 'scoreTexto' foi renomeado para 'scoreTextoElemento' pela mesma razão de consistência.
const scoreTextoElemento = document.getElementById('score-texto');
// ERRO ANTERIOR: Declarado como 'scoreTexto', mas o uso futuro (se tivesse) esperaria 'scoreTextElement'.
const resetarJogo = document.getElementById('resetar-btn');


// 2. Definir as perguntas e suas respostas (ARRAY DE OBJETOS)
const questoes = [
  { questao: "A água ferve a 100 graus Celsius ao nível do mar.", resposta: true },
  { questao: "O Sol gira em torno da Terra.", resposta: false },
  { questao: "O Brasil é o maior país da América do Sul.", resposta: true },
  { questao: "A moeda oficial do Japãp é o yuan.", resposta: false },
  { questao: 'As plantas realizam fotossíntese para produzir seu próprio alimento', resposta: true },
  { questao: "O ser humano possui três corações", resposta: false },
  { questao: "Harry Potter é o autor dos livros escritos por J.K. Rowling", resposta: false }
];

// 3. Variáveis de controle do jogo
let indiceDePerguntas = 0; // começa na primeira pergunta (no caso o indice 0)
let score = 0;             // pontuação inicial (primeiro indice do score)
let jogoTerminado = false;
// CORREÇÃO: Variável 'gameEndend' foi renomeada para 'jogoTerminado' e corrigido o erro de digitação.
// ERRO ANTERIOR: Estava digitado 'gameEndend' (com 'endend' ao invés de 'ended'), o que geraria um erro de lógica ou de variável não encontrada se usada.

// 4. Função para carregar e exibir uma nova pergunta

function loadQuestao() {
    // Limpar o feedback e seus estilos do acerto/erro anterior
    feedbackTextoElemento.textContent = '';
    // CORREÇÃO: Uso de 'feedbackTextoElemento' (variável corrigida) no lugar de 'feedbackTextElement'.
    // ERRO ANTERIOR: 'feedbackTextElement' não existia, pois você tinha declarado como 'feedbackTexto'.
    // CORREÇÃO: Uso de 'feedbackTextoElemento' (variável corrigida).
    // ERRO ANTERIOR: 'feedbackTextElement' não existia.
    feedbackTextoElemento.classList.remove('correct', 'wrong');

    // REORGANIZAÇÃO/CORREÇÃO: As próximas linhas (reabilitar botões e o bloco if/else) foram MOVIDAS PARA DENTRO desta função.
    // ERRO ANTERIOR: Essas linhas estavam SOLTAS no código JavaScript, fora de qualquer função.
    // Código solto não é executado de forma controlada; precisa estar dentro de funções ou no escopo global para ser executado uma vez.
    // Mas, para a lógica do jogo, elas precisam ser executadas CADA VEZ que uma nova questão é carregada, ou seja, DENTRO de 'loadQuestao()'.

    // Reabilitar os botões de resposta
    // CORREÇÃO: Propriedade 'disabled' com 'd'.
    // ERRO ANTERIOR: 'disable' não é a propriedade correta em JavaScript para desabilitar elementos HTML; o correto é 'disabled'.
    trueButton.disabled = false;
    // CORREÇÃO: Propriedade 'disabled' com 'd'.
    // ERRO ANTERIOR: 'disable' não é a propriedade correta.
    falseButton.disabled = false;

    // Lógica para verificar e exibir a próxima pergunta
    // CORREÇÃO: 'questions.length' foi trocado por 'questoes.length'.
    // ERRO ANTERIOR: 'questions' não era o nome do seu array de perguntas; o seu array se chama 'questoes'.
    if (indiceDePerguntas < questoes.length) {
        // se ainda houver perguntas, exibe a proxima 
        // CORREÇÃO: Declarada uma nova constante 'perguntaAtual' para pegar o objeto completo da questão do array 'questoes'.
        // ERRO ANTERIOR: 'const indiceDePerguntas = questao[indiceDePerguntas];' estava incorreto.
        // 1. Você estava tentando declarar uma nova constante 'indiceDePerguntas' com o mesmo nome da variável 'let' do controle do jogo.
        // 2. 'questao' não era o nome do seu array de perguntas (o correto é 'questoes').
        const perguntaAtual = questoes[indiceDePerguntas];
        // CORREÇÃO: Uso da variável 'questaoTextoElemento' (que já referencia o elemento <p>) e acesso à propriedade '.questao' do objeto 'perguntaAtual'.
        // ERRO ANTERIOR: 'questao-em-texto.textContent' tentava usar o ID diretamente como uma variável, o que não funciona em JavaScript.
        // Além disso, '.question' seria a propriedade se o nome fosse em inglês; seu objeto usa '.questao'.
        questaoTextoElemento.textContent = perguntaAtual.questao;
    } else {
        endGame();
        // se todas as perguntas foram respondidas o jogo termina 
        // CORREÇÃO: Comentado 'endGame()'.
        // ERRO ANTERIOR: A função 'endGame()' ainda não foi definida em seu código. Chamá-la neste ponto causaria um erro fatal.
        // Ela será implementada em um próximo passo.
        // endGame(); 
    }
}
// OBSERVAÇÃO: O código que estava solto AQUI foi MOVIDO para DENTRO da função 'loadQuestao()'.

// Implementando a Função checkAnswer()
// Receber a escolha do jogador (se ele clicou em "Verdadeiro" ou "Falso").
//  Definindo a Estrutura da Função
// A função checkAnswer() precisa de um parâmetro para saber qual foi a escolha do usuário (true ou false).
// 5. Função para verificar a resposta do usuário se foi verdadeiro ou falso

function checkAnswer(escolhaDoUsuario) {
    // 'escolhaDoUsuario' vai ser 'true' ou 'false'
    // Tudo que essa função precisa fazer vai aqui dentro
    // 2. Impedindo Ações Após o Jogo Terminar a função deve parar para evitar que o jogador continue clicando e gerando erros.
    if (jogoTerminado) { // Se o jogo já terminou, não faz mais nada
        return; // 'return' sai da função imediatamente
    }

    const perguntaAtual = questoes[indiceDePerguntas];
    const respostaCorreta = perguntaAtual.resposta;

    trueButton.disabled = true;
    falseButton.disabled = true;

    /*
    Detalhando:
 --trueButton e falseButton: São as referências (variáveis) aos seus elementos HTML <button> que você obteve lá no topo do seu JavaScript com document.getElementById().
 --disabled: É uma propriedade de elementos de formulário (como botões) em HTML. Quando definida como true, o botão fica inativo, o usuário não consegue clicar nele, e ele geralmente muda de aparência (fica "acinzentado"). Quando definida como false, o botão fica ativo novamente.
 -- = true;: Atribui o valor true à propriedade disabled, o que efetivamente desabilita o botão.
    */
    if (escolhaDoUsuario === respostaCorreta) { // Se a escolha do usuário for IGUAL à resposta correta
        feedbackTextoElemento.textContent = 'Correto!';
        feedbackTextoElemento.classList.add('correct');
        feedbackTextoElemento.classList.remove('wrong');
        //O que faz: Altera o texto do elemento HTML com o ID feedback-texto para a palavra "Correto". É assim que o jogo mostra ao jogador que ele acertou.
        //Detalhando: feedbackTextoElemento é a variável JavaScript que representa o <p id="feedback-texto"> no seu HTML. .textContent é uma propriedade que permite definir ou obter o conteúdo de texto de um elemento.

        score++;  //Incrementa (aumenta em 1) o valor da variável

    } else { // Se a escolha do usuário for DIFERENTE da resposta correta
        feedbackTextoElemento.textContent = 'Errado! A resposta correta era ' + (respostaCorreta ? 'Verdadeiro' : 'Falso') + '.'; /*O sinal de mais aqui é usado para concatenar strings (juntar textos).*/
        feedbackTextoElemento.classList.add('wrong');
        feedbackTextoElemento.classList.remove('correct');
    }
    scoreTextoElemento.textContent = score;

    // Avança para a próxima pergunta após um curto delay para o usuário ver o feedback
    indiceDePerguntas++;

    if (indiceDePerguntas < questoes.length) {
        setTimeout(() => {
            loadQuestao();
        }, 1500); // 1.5 segundos de pausa antes de mostrar a próxima pergunta
    } else {
        setTimeout(() => {
            endGame();
        }, 1500);
    }
}

function endGame() {
  jogoTerminado = true;
  questaoTextoElemento.textContent = `Jogo terminado! Sua pontuação final é: ${score} / ${questoes.length}`;
  feedbackTextoElemento.textContent = '';
  trueButton.disabled = true;
  falseButton.disabled = true;
}

// Adicionando eventos aos botões para capturar a escolha do usuário
trueButton.addEventListener('click', () => checkAnswer(true));
falseButton.addEventListener('click', () => checkAnswer(false));

// Função para resetar o jogo ao clicar no botão resetar
resetarJogo.addEventListener('click', () => {
    indiceDePerguntas = 0;
    score = 0;
    jogoTerminado = false;
    scoreTextoElemento.textContent = score;
    feedbackTextoElemento.textContent = '';
    feedbackTextoElemento.classList.remove('correct', 'wrong');
    trueButton.disabled = false;
    falseButton.disabled = false;
    loadQuestao();
});

// Finalmente, carregar a primeira pergunta quando a página carregar
loadQuestao();
