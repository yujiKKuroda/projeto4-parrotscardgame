let numCartas = 0;
let ePar = false;

function iniciar() {
    while (ePar === false) {
        numCartas = prompt("Com quantas cartas você quer jogar? Escolha apenas números pares entre 4 e 14.");
        if (numCartas % 2 === 0 && numCartas >= 4 && numCartas < 15) {
            ePar = true;
            let metade = numCartas / 2;
            const ulCima = document.querySelector(".cima");
            const ulBaixo = document.querySelector(".baixo");
            ulCima.innerHTML = "";
            ulBaixo.innerHTML = "";
            for (let i = 0; i < metade; i++) {
                ulCima.innerHTML += `<li class="carta" onclick="virar()"><img src="img/front.png"></li>`;
                ulBaixo.innerHTML += `<li class="carta" onclick="virar()"><img src="img/front.png"></li>`;
            }
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

iniciar();