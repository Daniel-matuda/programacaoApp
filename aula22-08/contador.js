let segundos = 0;
let intervalo;

function iniciarContagem() {
    intervalo = setInterval(function() {
        segundos++;
        document.getElementById('tempo').textContent = segundos;
    }, 1000);

    document.getElementById('iniciar').disabled = true;
    document.getElementById('pausar').disabled = false;
    document.getElementById('retomar').disabled = true;
}

function pausarContagem() {
    clearInterval(intervalo);

    document.getElementById('pausar').disabled = true;
    document.getElementById('retomar').disabled = false;
}

function retomarContagem() {
    intervalo = setInterval(function() {
        segundos++;
        document.getElementById('tempo').textContent = segundos;
    }, 1000);

    document.getElementById('pausar').disabled = false;
    document.getElementById('retomar').disabled = true;
}

function limparContagem() {
    clearInterval(intervalo);
    segundos = 0;
    document.getElementById('tempo').textContent = segundos;

    document.getElementById('iniciar').disabled = false;
    document.getElementById('pausar').disabled = true;
    document.getElementById('retomar').disabled = true;
}

document.getElementById('iniciar').addEventListener('click', iniciarContagem);
document.getElementById('pausar').addEventListener('click', pausarContagem);
document.getElementById('retomar').addEventListener('click', retomarContagem);
document.getElementById('limpar').addEventListener('click', limparContagem);
