function calculateBMI() {
    // Obter os valores de peso e altura
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    // Calcular o IMC
    var bmi = weight / Math.pow(height, 2);

    // Determinar a classificação do IMC
    var classification;
    if (bmi < 18.5) {
        classification = "Abaixo do peso";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        classification = "Peso normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        classification = "Sobrepeso";
    } else if (bmi >= 30 && bmi < 34.9) {
        classification = "Obesidade grau I";
    } else if (bmi >= 35 && bmi < 39.9) {
        classification = "Obesidade grau II";
    } else {
        classification = "Obesidade grau III ou mórbida";
    }

    // Exibir o resultado
    document.getElementById('result').innerHTML = "Seu IMC é " + bmi.toFixed(2) + ". Você está " + classification;
}
