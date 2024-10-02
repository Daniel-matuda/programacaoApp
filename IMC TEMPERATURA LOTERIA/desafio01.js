function generateNumbers() {
    const gameType = document.getElementById('gameType').value;
    let numbersNeeded;
    let maxNumber = 60; // Máximo comum entre os jogos
    let numbers = [];

    switch(gameType) {
        case 'quina':
            numbersNeeded = 5;
            break;
        case 'lotofacil':
            numbersNeeded = 15;
            break;
        case 'sena':
            numbersNeeded = 6;
            break;
        default:
            alert('Tipo de jogo não suportado');
            return;
    }

    // Gerando números aleatórios sem repetição
    while(numbers.length < numbersNeeded) {
        let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    // Ordenando os números gerados
    numbers.sort((a, b) => a - b);

    // Exibindo o resultado
    document.getElementById('result').innerText = `Números sorteados para ${gameType.toUpperCase()}: ${numbers.join(', ')}`;
}
