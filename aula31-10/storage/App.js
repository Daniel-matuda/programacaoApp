import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const savedItems = await AsyncStorage.getItem('items');
        if (savedItems) setItems(JSON.parse(savedItems));
      } catch (error) {
        console.error('Erro ao carregar itens', error);
      }
    };
    loadItems();
  }, []);

  const saveItems = async (newItems) => {
    try {
      await AsyncStorage.setItem('items', JSON.stringify(newItems));
    } catch (error) {
      console.error('Erro ao salvar itens', error);
    }
  };

  const addItem = () => {
    if (!text) return;
    const newItems = [...items, text].slice(-5);
    setItems(newItems);
    saveItems(newItems);
    setText('');
  };

  const clearItems = async () => {
    try {
      await AsyncStorage.removeItem('items');
      setItems([]);
    } catch (error) {
      console.error('Erro ao limpar itens', error);
    }
  };

  const removeFirstItem = () => {
    if (items.length === 0) return;
    const newItems = items.slice(1);
    setItems(newItems);
    saveItems(newItems);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um item"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.buttonAdd} onPress={addItem}>
        <Text style={styles.buttonText}>Adicionar Item</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonRemoveFirst} onPress={removeFirstItem}>
        <Text style={styles.buttonText}>Remover Primeiro Item</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonClear} onPress={clearItems}>
        <Text style={styles.buttonText}>Limpar Itens</Text>
      </TouchableOpacity>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonAdd: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonRemoveFirst: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonClear: {
    backgroundColor: '#FF4136',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;
