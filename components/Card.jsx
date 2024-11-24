import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import frasesMotivadoras from './frases'

const Card = () => {
  // Estado para almacenar la frase aleatoria
  const [fraseAleatoria, setFraseAleatoria] = useState(getRandomFrase());

  // Función para obtener una frase aleatoria
  function getRandomFrase() {
    return frasesMotivadoras[Math.floor(Math.random() * frasesMotivadoras.length)];
  }

  return (
    <TouchableOpacity onPress={() => setFraseAleatoria(getRandomFrase())}>
      <View style={styles.container}>
        <Text style={styles.frase}>{fraseAleatoria}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d65b88',
    marginBottom: 10,
  },
  frase: {
    fontSize: 16,
    color: '#d65b88',
    textAlign: 'center',
  }
})

export default Card;
