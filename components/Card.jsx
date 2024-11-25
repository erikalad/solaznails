import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Platform } from 'react-native';
import React, { useState } from 'react';
import frasesMotivadoras from './frases';
import flores from './../assets/images/flores.png';

const Card = () => {
  // Estado para almacenar la frase aleatoria
  const [fraseAleatoria, setFraseAleatoria] = useState(getRandomFrase());

  // Función para obtener una frase aleatoria
  function getRandomFrase() {
    return frasesMotivadoras[Math.floor(Math.random() * frasesMotivadoras.length)];
  }

  return (
    <TouchableOpacity onPress={() => setFraseAleatoria(getRandomFrase())}>
      <ImageBackground source={flores} style={styles.container}>
        <Text style={styles.frase}>{fraseAleatoria}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",

    // Sombras para iOS
    shadowColor: "#000",            // Color de la sombra
    shadowOffset: { width: 0, height: 5 },  // Desplazamiento de la sombra
    shadowOpacity: 0.3,             // Opacidad de la sombra
    shadowRadius: 10,               // Radio de difuminado de la sombra

    // Sombra para Android
    elevation: 5,                   // Elevación de la sombra en Android
  },
  frase: {
    fontSize: 16,
    color: '#d65b88',
    textAlign: 'center',
  },
  frase: {
    fontSize: 16,
    color: '#d65b88',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente para que el texto sea legible sobre la imagen
    padding: 10,
    borderRadius: 10,
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
});

export default Card;
