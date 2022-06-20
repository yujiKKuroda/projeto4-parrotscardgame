let numCartas = 0;
let ePar = false;
let baralho = [];

function iniciar() {
    let metade = numCartas / 2;
    while (ePar === false) {
        numCartas = prompt("Com quantas cartas você quer jogar? Escolha apenas números pares entre 4 e 14.");
        if (numCartas % 2 === 0 && numCartas >= 4 && numCartas < 15) {
            ePar = true;
            for (let i = 0; i < numCartas; i++) {
                const num = Math.floor(i / 2);
                baralho.push(num);
            }
            baralho.sort(comparador);
            const ulCima = document.querySelector(".cima");
            const ulBaixo = document.querySelector(".baixo");
            colocarCartas(ulCima, ulBaixo, 0, numCartas);
        } else if (numCartas % 2 !== 0) {
            alert("Número inválido! Por favor, digite um número par.");
        } else if (numCartas < 4) {
            alert("Número inválido! Por favor, digite um número igual ou maior que 4.");
        } else if (numCartas > 14) {
            alert("Número inválido! Por favor, digite um número igual ou menor que 14.");
        } else {
            alert("Por favor digite um número!");
        }
    }    
}

function colocarCartas(tabuleiroCima, tabuleiroBaixo, inicio, fim) {
    tabuleiroCima.innerHTML = "";
    tabuleiroBaixo.innerHTML = "";
    for (let i = inicio; i < fim; i++) {
        tabuleiroCima.innerHTML += `<li class="carta num${baralho[i]}" onclick="virar()"><img src="img/front.png"></li>`;
        i++;
        tabuleiroBaixo.innerHTML += `<li class="carta num${baralho[i]}" onclick="virar()"><img src="img/front.png"></li>`;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function virar(carta) {
    alert("Periquito!");
}

iniciar();
console.log(baralho);