import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');
  const [imagem, setImagem] = useState(require('./assets/fita.png')); // Imagem inicial (fita métrica)

  const calcularIMC = () => {
    if (peso && altura) {
      const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
      setResultado(imc.toFixed(2));

      // Classificações do IMC e troca de imagens
      if (imc < 18.5) {
        setClassificacao('Abaixo do peso');
        setImagem(require('./assets/abaixo-do-peso.png'));
      } else if (imc >= 18.5 && imc < 24.9) {
        setClassificacao('Peso normal');
        setImagem(require('./assets/peso-normal.png'));
      } else if (imc >= 25 && imc < 29.9) {
        setClassificacao('Sobrepeso');
        setImagem(require('./assets/sobrepeso.png'));
      } else {
        setClassificacao('Obesidade');
        setImagem(require('./assets/obesidade.png'));
      }
    } else {
      setResultado('');
      setClassificacao('Por favor, insira o peso e a altura corretamente.');
      setImagem(require('./assets/fita.png')); // Voltar para a fita métrica se houver erro
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={imagem} // Imagem dinâmica
        style={styles.image}
      />
      <Text style={styles.title}>Cálculo do IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {resultado !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Seu IMC: {resultado}</Text>
          <Text style={styles.classification}>Classificação: {classificacao}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  classification: {
    fontSize: 18,
    color: '#666',
  },
});

export default App;
