function escolher() {
    let op = Number(prompt('Escolha uma das opções'));

    switch (op) {
        case 1:
            alert('Você escolheu Arroz');
            break;
        case 2:
            alert('Você escolheu Feijão');
            break;
        case 3:
            alert('Você escolheu Salada');
            break;
        case 4:
            alert('Você escolheu Macarrão');
            break;
        default:
            alert('Opção inválida')
            break;
    }
}
