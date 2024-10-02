import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.incrementButton]} onPress={increment}>
          <Text style={styles.buttonText}>Entrou</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.decrementButton]} onPress={decrement}>
          <Text style={styles.buttonText}>Saiu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  counter: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#17a2b8',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  incrementButton: {
    backgroundColor: '#28a745', // Cor verde
  },
  decrementButton: {
    backgroundColor: '#dc3545', // Cor vermelha
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
