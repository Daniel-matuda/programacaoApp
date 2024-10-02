function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    let result;

    switch(unitSelect) {
        case 'celsius':
            result = parseFloat(tempInput) * 9 / 5 + 32; // Convertendo Celsius para Fahrenheit
            break;
        case 'fahrenheit':
            result = (parseFloat(tempInput) - 32) * 5 / 9; // Convertendo Fahrenheit para Celsius
            break;
        case 'kelvin':
            result = parseFloat(tempInput) + 273.15; // Convertendo Kelvin para Celsius
            break;
        default:
            alert('Unidade não suportada');
            return;
    }

    document.getElementById('result').innerText = `Resultado: ${result.toFixed(2)}°`;
}

