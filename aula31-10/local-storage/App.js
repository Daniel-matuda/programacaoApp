import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [nome, setNome] = useState('');
  const [nomeSalvo, setNomeSalvo] = useState(null);

  // Função para salvar o nome no Async Storage
  const salvarNome = async () => {
    try {
      await AsyncStorage.setItem('NOME_USUARIO', nome);
      setNomeSalvo(nome);
      alert('Nome salvo com sucesso!');
    } catch (error) {
      console.log('Erro ao salvar nome:', error);
    }
  };

  // Função para carregar o nome salvo no Async Storage
  const carregarNome = async () => {
    try {
      const nomeArmazenado = await AsyncStorage.getItem('NOME_USUARIO');
      if (nomeArmazenado) {
        setNomeSalvo(nomeArmazenado);
        setNome(nomeArmazenado); // Opcional: define o valor inicial do campo de entrada
      }
    } catch (error) {
      console.log('Erro ao carregar nome:', error);
    }
  };

  // Carrega o nome salvo quando o app é aberto
  useEffect(() => {
    carregarNome();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite seu Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Salvar Nome" onPress={salvarNome} />
      {nomeSalvo && <Text style={styles.savedName}>Nome Salvo: {nomeSalvo}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  savedName: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'green',
  },
});
