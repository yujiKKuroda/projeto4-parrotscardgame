let numCartas = 0;
let ePar = false;
let baralho = [];
let cartasViradas = 0;
let contJogada = 0;
let imagens = ["img/bobrossparrot.gif", "img/explodyparrot.gif", "img/fiestaparrot.gif", "img/metalparrot.gif", "img/revertitparrot.gif", "img/tripletsparrot.gif", "img/unicornparrot.gif"];
let cartaAnterior = "0";
let paresVirados = 0;
const body = document.querySelector("body");

function comparador() { 
	return Math.random() - 0.5; 
}

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
        tabuleiroCima.innerHTML += 
        `<div class="cena ${baralho[i]}" onclick="virar(this)">
            <div class="carta">
                <div class="frente">
                    <img src="img/front.png">
                </div>
                <div class="verso">
                    <img src="${imagens[baralho[i]]}">
                </div>
            </div>
        </div>`;
        i++;
        tabuleiroBaixo.innerHTML += 
        `<div class="cena ${baralho[i]}" onclick="virar(this)">
            <div class="carta">
                <div class="frente">
                    <img src="img/front.png">
                </div>
                <div class="verso">
                    <img src="${imagens[baralho[i]]}">
                </div>
            </div>
        </div>`;
    }
}

function virar(carta) {
    if (carta.classList.contains("virada") === false) {
        carta.classList.add("virada");
        if (cartaAnterior === "0") {
            cartaAnterior = carta;
        }
        cartasViradas++;
        contJogada++;
    }
    if (cartasViradas === 2) {
        if (!body.classList.contains("desligado")) {
            body.classList.add("desligado");
            setTimeout(function() {body.classList.remove("desligado");}, 1000);
        }
        setTimeout(() => {comparar(carta)}, 1000);
    }
}

function comparar(carta) {
    if (carta.classList.value !== cartaAnterior.classList.value) {
        carta.classList.remove("virada");
        cartaAnterior.classList.remove("virada");
    } else {
        paresVirados++;
        if (paresVirados === numCartas / 2) {
            fimDeJogo();
        }
    }
    cartasViradas = 0;
    cartaAnterior = "0";
}

function fimDeJogo() {
    alert(`Você ganhou em ${contJogada} jogadas!`);
}

imagens.sort(comparador);
iniciar();