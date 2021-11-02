let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//Criando ordem aleatória de cores

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random[] * 4); //váriavel para guardar um número aleatório entre 0 e 3 a cada rodada
    order[order.length] = colorOrder; //atribuir o a ordem do número que foi gerado ao próximo que irá vir
    clickedOrder = []; //atribui o índice que queremos do array com a cor que sair na função de sorteio

    //acender a cor que corresponde ao número sorteado (for vai percorrer o array e executar a função que for colocado dentro dele)
    for(let i in order) {
        let elementColor = createColorElement(order[i]); //cada vez que o for rodar, o 'i' será o índice do array que será colocada dentro dessa variável
        lightColor(elementColor, Number(i) + 1); //será criada logo em seguida da order, fazendo com que traga um número para existir na lista de cores
    }
}
// Acende a próxima cor
let lightColor = (element, number) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('')
    });
}

// Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for[let i in clickedOrder]{ //para cada 'i' dentro do clickedOrder, será feito uma comparação
        if(clickedOrder[i] != order[i]) { //se o clickedOrder na posição 'i' for diferente de order na posição 'i', irá rodar uma nova função chamada lose. 
            lose();
            break(); //irá rodar a função lose e irá parar
        }
        
    }
    if(clickedOrder.length == order.length) { //comparando se os valores são iguais
            alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`); //se a condição for igual, irá mostrar um alerta informando a pontuação
            nextLevel(); 
        }
}

// Função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    elementColor(color).classList.add('selected');

    setTimeout(() => {
        elementColor(color).classList.remove('selected');
    });

    checkOrder();
} 