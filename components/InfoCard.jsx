import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoCard = ({ type, text }) => {
  // Determinar el estilo del contenedor según el tipo
  const cardStyle = [
    styles.card,
    type === 'success' && styles.success,
    type === 'error' && styles.error,
    type === 'info' && styles.info,
  ];

  return (
    <View style={cardStyle}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Para Android
    marginTop: 20,
    alignItems: "center",
    position:"absolute",
  },
  success: {
    backgroundColor: '#d4edda', // Verde claro
    borderColor: '#28a745',
    borderWidth: 1,
  },
  error: {
    backgroundColor: '#f8d7da', // Rojo claro
    borderColor: '#dc3545',
    borderWidth: 1,
  },
  info: {
    backgroundColor: '#d1ecf1', // Azul claro
    borderColor: '#17a2b8',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default InfoCard;
