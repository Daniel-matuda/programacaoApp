import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

const choices = [
  { name: 'Pedra', image: require('./assets/pedra.png') },
  { name: 'Papel', image: require('./assets/papel.png') },
  { name: 'Tesoura', image: require('./assets/tesoura.png') },
];

export default function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [appChoice, setAppChoice] = useState(null);
  const [result, setResult] = useState('');

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (user, app) => {
    if (user.name === app.name) {
      return 'Empate!';
    } else if (
      (user.name === 'Pedra' && app.name === 'Tesoura') ||
      (user.name === 'Tesoura' && app.name === 'Papel') ||
      (user.name === 'Papel' && app.name === 'Pedra')
    ) {
      return 'Você ganhou!';
    } else {
      return 'Você perdeu!';
    }
  };

  const getResultColor = (result) => {
    if (result === 'Você ganhou!') {
      return styles.winText;
    } else if (result === 'Você perdeu!') {
      return styles.loseText;
    } else {
      return styles.drawText;
    }
  };

  const playGame = (userChoice) => {
    const appChoice = getRandomChoice();
    setUserChoice(userChoice);
    setAppChoice(appChoice);
    const gameResult = determineWinner(userChoice, appChoice);
    setResult(gameResult);
  };

  const resetGame = () => {
    setUserChoice(null);
    setAppChoice(null);
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, Papel e Tesoura</Text>
      
      <View style={styles.choicesContainer}>
        {choices.map((choice, index) => (
          <TouchableOpacity key={index} onPress={() => playGame(choice)}>
            <Image source={choice.image} style={styles.choiceImage} resizeMode="contain" />
          </TouchableOpacity>
        ))}
      </View>

      {userChoice && appChoice && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Você escolheu: {userChoice.name}</Text>
          <Text style={styles.resultText}>App escolheu: {appChoice.name}</Text>
          <Text style={[styles.resultText, getResultColor(result)]}>{result}</Text>
        </View>
      )}

      <Button title="Jogar Novamente" onPress={resetGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choicesContainer: {
    flexDirection: 'column', // Alinhar as imagens uma em cima da outra
    justifyContent: 'center',
    alignItems: 'center',
  },
  choiceImage: {
    width: 150, // Aumenta o tamanho da imagem
    height: 150, // Aumenta o tamanho da imagem
    marginVertical: 15, // Adiciona espaçamento vertical entre as imagens
  },
  resultContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  winText: {
    color: 'green', // Cor verde para vitória
  },
  loseText: {
    color: 'red', // Cor vermelha para derrota
  },
  drawText: {
    color: 'blue', // Cor amarela para empate
  },
});
