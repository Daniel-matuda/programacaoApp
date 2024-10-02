import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import fortunes from './assets/fortunes.json'; // Importando as frases de sorte

export default function App() {
  const [fortune, setFortune] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  const getRandomFortune = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
    setIsOpened(true); // Mudar o estado para biscoito aberto
  };

  const resetFortuneCookie = () => {
    setFortune(''); // Limpa a frase
    setIsOpened(false); // Retorna ao estado de biscoito fechado
  };

  return (
    <View style={styles.container}>
      <Button title="Resetar" onPress={resetFortuneCookie} style={styles.resetButton} />
      <Image
        source={isOpened ? require('./assets/biscoitoAberto.png') : require('./assets/biscoitoFechado.png')}
        style={styles.image}
        resizeMode="contain" // Ajusta a imagem para caber sem cortes
      />
      {isOpened && <Text style={styles.fortuneText}>{fortune}</Text>}
      <Button title="Quebrar Biscoito" onPress={getRandomFortune} disabled={isOpened} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  resetButton: {
    marginBottom: 200, // Adiciona um espaçamento abaixo do botão de reset
    alignSelf: 'flex-start', // Alinha o botão à esquerda
  },
  image: {
    width: '100%', // Ajusta a largura da imagem para 100% da tela
    height: 200, // Altura fixa para a imagem
    marginBottom: 20,
  },
  fortuneText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    color: '#343a40',
  },
});

