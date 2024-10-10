import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import  Slider from '@react-native-community/slider';

const App = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [percentage, setPercentage] = useState(0);

  // Função para atualizar o valor do slider e a porcentagem
  const handleSliderChange = (value) => {
    setSliderValue(value);
    setPercentage(Math.round((value / 100) * 100)); // Convertendo para porcentagem
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajuste o Slider</Text>

      <Slider
        minimumValue={0}
        maximumValue={100}
        value={sliderValue}
        onValueChange={handleSliderChange}
        style={styles.slider}
      

      />

      <Picker
        selectedValue={`${percentage}%`}
        style={styles.picker}
        onValueChange={(itemValue) => setPercentage(parseInt(itemValue))}
      >
        <Picker.Item label={`${percentage}%`} value={`${percentage}%`} />
        <Picker.Item label="0%" value="0%" />
        <Picker.Item label="25%" value="25%" />
        <Picker.Item label="50%" value="50%" />
        <Picker.Item label="75%" value="75%" />
        <Picker.Item label="100%" value="100%" />
      </Picker>

      <Text style={styles.sizeText}>Valor do Slider: {sliderValue}</Text>
      <Text style={styles.sizeText}>Porcentagem: {percentage}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 150,
    marginBottom: 20,
  },
  sizeText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default App;
