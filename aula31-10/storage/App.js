import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

// Conecta (ou cria) o banco de dados
const db = SQLite.openDatabase('itens.db');

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Cria a tabela se não existir
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS itens (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT);`
      );
    });

    // Carrega os itens salvos
    loadItems();
  }, []);

  // Função para carregar os itens do banco
  const loadItems = () => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM itens;`,
        [],
        (_, { rows }) => setItems(rows._array),
        (_, error) => console.error('Erro ao carregar itens', error)
      );
    });
  };

  // Função para cadastrar um novo item
  const addItem = () => {
    if (!item.trim()) {
      Alert.alert('Por favor, insira um nome para o item.');
      return;
    }

    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO itens (nome) VALUES (?);`,
        [item],
        (_, result) => {
          setItem(''); // Limpa o campo de texto
          loadItems(); // Atualiza a lista de itens
        },
        (_, error) => console.error('Erro ao adicionar item', error)
      );
    });
  };

  // Função para renderizar cada item
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Itens</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do item"
        value={item}
        onChangeText={setItem}
      />
      <Button title="Cadastrar Item" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 10,
    borderRadius: 5,
  },
  list: {
    marginTop: 20,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemText: {
    fontSize: 18,
  },
});
