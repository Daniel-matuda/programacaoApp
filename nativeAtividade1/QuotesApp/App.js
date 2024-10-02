import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import quotesData from './assets/quotes.json'; // Importando as citações

export default function App() {
  const [quote, setQuote] = useState({});
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote(); // Carregar uma citação ao iniciar o aplicativo
  }, []);

  return (
    <View style={styles.container}>
      {quote.image && (
        <Image source={{ uri: quote.image }} style={styles.image} />
      )}
      <Text style={styles.quote}>"{quote.quote}"</Text>
      <Text style={styles.author}>- {quote.author}</Text>
      <Button title="Nova Citação" onPress={getRandomQuote} />
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  quote: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
    color: '#343a40',
  },
  author: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#495057',
  },
});
