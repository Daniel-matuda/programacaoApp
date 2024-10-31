import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Contador() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Exemplo de um console.log que será executado sempre que o valor do count mudar
    console.log(`Valor atual do contador: ${count}`);
  }, [count]); // Só será chamado quando count mudar
  
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contador: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Incrementar" onPress={() => setCount(count + 1)} />
        <Button title="Decrementar" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
