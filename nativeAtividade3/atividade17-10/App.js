import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      {/* Parte Superior - Botões com Ícones */}
      <View style={styles.topButtonsContainer}>
        {['home', 'shopping-cart', 'credit-card', 'user', 'cogs'].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.iconButton}>
            <Icon name={icon} size={24} color="#fff" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Imagem com botões nas extremidades */}
      <View style={styles.imageContainer}>
        <Image source={require('./assets/globo.jpg')} style={[styles.image, { width: screenWidth, height: screenWidth * 0.6 }]} />
        
        {/* Botões sobrepostos à imagem */}
        <TouchableOpacity style={styles.topLeftButton}>
          <Icon name="camera" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topRightButton}>
          <Icon name="play" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomLeftButton}>
          <Icon name="pause" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomRightButton}>
          <Icon name="stop" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Texto Mapa Mundi e Ícone de Globo */}
      <View style={styles.mapTitleContainer}>
        <Text style={styles.mapTitle}>Mapa Mundi</Text>
        <TouchableOpacity style={styles.globeButton}>
          <Icon name="globe" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Cards abaixo do texto */}
      <View style={styles.cardsContainer}>
        {/* Primeiro card - Estilo de dia */}
        <View style={[styles.card, styles.dayCard]}>
          <Icon name="sun-o" size={50} color="#fff" />
          <Text style={styles.cardText}>Dia</Text>
        </View>

        {/* Segundo card - Estilo de tarde */}
        <View style={[styles.card, styles.afternoonCard]}>
          <Icon name="clock-o" size={50} color="#fff" />
          <Text style={styles.cardText}>Tarde</Text>
        </View>

        {/* Terceiro card - Estilo de noite */}
        <View style={[styles.card, styles.nightCard]}>
          <Icon name="moon-o" size={50} color="#fff" />
          <Text style={styles.cardText}>Noite</Text>
        </View>
      </View>

      {/* Botões Redondos na parte inferior */}
      <View style={styles.bottomButtonsContainer}>
        {['phone', 'envelope', 'map-marker', 'info-circle'].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.roundButton}>
            <Icon name={icon} size={30} color="#fff" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between', // Ajusta o preenchimento do espaço entre os elementos
    paddingTop: 50,
    alignItems: 'center',
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: 10,
  },
  iconButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 30,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    borderRadius: 10,
  },
  topLeftButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 30,
  },
  topRightButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 30,
  },
  bottomLeftButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#f39c12',
    padding: 10,
    borderRadius: 30,
  },
  bottomRightButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#8e44ad',
    padding: 10,
    borderRadius: 30,
  },
  mapTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginBottom: 10,
  },
  mapTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  globeButton: {
    padding: 5,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    width: Dimensions.get('window').width * 0.3,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayCard: {
    backgroundColor: '#f1c40f',
  },
  afternoonCard: {
    backgroundColor: '#e67e22',
  },
  nightCard: {
    backgroundColor: '#2c3e50',
  },
  cardText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
  },
  roundButton: {
    backgroundColor: '#1abc9c',
    padding: 20,
    borderRadius: 40,
  },
});
