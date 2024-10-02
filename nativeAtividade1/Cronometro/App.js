import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [time, setTime] = useState(0); // tempo em milissegundos
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10); // Atualiza a cada 10 milissegundos
    }
  };

  const stopTimer = () => {
    if (running) {
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(time)}</Text>
      <View style={styles.buttonContainer}>
        <Button title={running ? "Pausar" : "Iniciar"} onPress={running ? stopTimer : startTimer} />
        <Button title="Reiniciar" onPress={resetTimer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

