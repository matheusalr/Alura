alert('Boas Vindas ao Jogo do Número Secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um Número entre 1 e 10');
       // se chute for igual ao número secreto 
       if (chute == numeroSecreto) {
        break;
        } else {
        if (chute > numeroSecreto) {
            alert(`O Número secreto é menor que o ${chute}`);
        } else {
            alert(`O Número secreto é maior que o ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o Número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*
if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o Número Secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else{
    alert(`Isso ai! Você descobriu o Número Secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/


