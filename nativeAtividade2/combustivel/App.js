import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState(require('./assets/posto-de-combustivel.png')); // Imagem inicial

  const calcularCombustivel = () => {
    if (alcool && gasolina) {
      const proporcao = parseFloat(alcool) / parseFloat(gasolina);

      if (proporcao < 0.7) {
        setResultado('Abasteça com Etanol');
        setImagem(require('./assets/etanol.png')); // Imagem do etanol
      } else {
        setResultado('Abasteça com Gasolina');
        setImagem(require('./assets/gasolina.png')); // Imagem da gasolina
      }
    } else {
      setResultado('Por favor, insira ambos os valores corretamente.');
      setImagem(require('./assets/posto-de-combustivel.png')); // Voltar à imagem inicial se houver erro
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={imagem} // Imagem dinâmica
        style={styles.image}
      />
      <Text style={styles.title}>Comparação de Combustível</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço do Etanol (R$)"
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina (R$)"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
      />
      <Button title="Calcular" onPress={calcularCombustivel} />
      {resultado !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>{resultado}</Text>
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
});

export default App;
