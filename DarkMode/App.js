import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker'
import  Slider  from '@react-native-community/slider'


export default function App() {
  // Estado para tema, tamanho da fonte e modo noturno
  const [theme, setTheme] = useState('Claro'); // 'Claro' ou 'Escuro'
  const [fontSize, setFontSize] = useState(16);
  const [nightMode, setNightMode] = useState(false); // True para Modo Noturno

  // Efeito para sincronizar o Picker com o Switch
  useEffect(() => {
    if (theme === 'Escuro') {
      setNightMode(true);
    } else {
      setNightMode(false);
    }
  }, [theme]);

  // Sincronizar o Switch com o Picker
  const toggleNightMode = (value) => {
    setNightMode(value);
    if (value) {
      setTheme('Escuro');
    } else {
      setTheme('Claro');
    }
  };

  // Função para resetar as preferências
  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setNightMode(false);
  };

  return (
    <View style={[styles.container, nightMode ? styles.darkMode : styles.lightMode]}>
      <Text style={[styles.title, nightMode ? styles.darkText : styles.lightText]}>Configurações de Preferências</Text>

      {/* Picker para selecionar o tema */}
      <View style={styles.section}>
        <Text style={[styles.label, nightMode ? styles.darkText : styles.lightText]}>Tema do Aplicativo</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={theme}
            onValueChange={(itemValue) => setTheme(itemValue)}
            style={[styles.picker, nightMode ? styles.darkPicker : styles.lightPicker]}
          >
            <Picker.Item label="Claro" value="Claro" />
            <Picker.Item label="Escuro" value="Escuro" />
            <Picker.Item label="Automático" value="Automático" />
          </Picker>
        </View>
      </View>

      {/* Slider para ajustar o tamanho da fonte */}
      <View style={styles.section}>
        <Text style={[styles.label, nightMode ? styles.darkText : styles.lightText]}>Tamanho da Fonte</Text>
        <Slider
          style={styles.slider}
          minimumValue={12}
          maximumValue={30}
          step={1}
          value={fontSize}
          minimumTrackTintColor={nightMode ? '#bb86fc' : '#6200ee'}
          maximumTrackTintColor="#ddd"
          thumbTintColor={nightMode ? '#bb86fc' : '#6200ee'}
          onValueChange={(value) => setFontSize(value)}
        />
        <Text style={[styles.sampleText, { fontSize: fontSize }, nightMode ? styles.darkText : styles.lightText]}>
          Frase que irá mudar de tamanho
        </Text>
      </View>

      {/* Switch para ativar/desativar o modo noturno */}
      <View style={styles.section}>
        <Text style={[styles.label, nightMode ? styles.darkText : styles.lightText]}>
          Modo Noturno: {nightMode ? 'Ativado' : 'Desativado'}
        </Text>
        <Switch
          value={nightMode}
          onValueChange={(value) => toggleNightMode(value)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={nightMode ? "#bb86fc" : "#f4f3f4"}
        />
      </View>

      {/* Botão para resetar as preferências */}
      <View style={styles.buttonContainer}>
        <Button title="Resetar Preferências" onPress={resetPreferences} color={nightMode ? "#bb86fc" : "#6200ee"} />
      </View>
    </View>
  );
}

// Estilos para o layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  lightPicker: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  darkPicker: {
    backgroundColor: '#444',
    borderColor: '#666',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sampleText: {
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  lightMode: {
    backgroundColor: '#f5f5f5',
  },
  darkMode: {
    backgroundColor: '#121212',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});