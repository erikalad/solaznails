import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useTurnos } from './../context/TurnosContext';

const CardTurnos = () => {
  const { turnos } = useTurnos();
  console.log(turnos);

  // Obtener la fecha actual en formato 'YYYY-MM-DD' (sin hora)
  const today = new Date();
  const todayString = today.toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
  
  // Obtener la fecha del día siguiente
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'

  const colors = [
    '#ffb3ba', // Pastel rosa
    '#ffdfba', // Pastel naranja
    '#ffffba', // Pastel amarillo
    '#baffc9', // Pastel verde
    '#bae1ff', // Pastel azul
    '#d4a5a5', // Pastel rojo
    '#f3c6c6', // Pastel coral
    '#e0bbd7', // Pastel lavanda
    '#c1e1dc', // Pastel aqua
    '#f9e2ae', // Pastel mostaza
  ];

  const getFechaTexto = (fechaTurno) => {
    // Comparar la fecha del turno con hoy y mañana
    if (fechaTurno === todayString) {
      return 'Hoy';
    } else if (fechaTurno === tomorrowString) {
      return 'Mañana';
    } else {
      return fechaTurno;
    }
  };

  // Filtrar los turnos para que solo se muestren los de hoy y mañana
  const turnosFiltrados = turnos.filter(turno =>
    turno.fecha === todayString || turno.fecha === tomorrowString
  );

  // Ordenar los turnos por la hora (más temprano a más tarde)
  const turnosOrdenados = turnosFiltrados.sort((a, b) => {
    // Convertir la hora en formato de 24 horas con minutos
    const horaA = a.hora; // Asegurarse de que la hora tenga formato HH:00
    const horaB = b.hora;

    // Comparar las horas (convertidas a formato 24hs HH:MM)
    return new Date(`1970-01-01T${horaA}Z`) - new Date(`1970-01-01T${horaB}Z`);
  });

  return (
    <View style={styles.container}>
      {turnosOrdenados.length > 0 ? (
        turnosOrdenados.map((turno) => (
          <View key={turno.id} style={styles.turnoContainer}>
            <View style={[styles.circle, { backgroundColor: colors[Math.floor(Math.random() * colors.length)] }]} />
            <View style={styles.infoContainer}>
              <Text style={styles.fecha}>{getFechaTexto(turno.fecha)}</Text>
              <Text style={styles.hora}>{turno.hora} hs</Text>
              <Text style={styles.nombre}>{turno.nombre}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noTurnos}>No hay turnos recientes</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
    gap: 10,
  },
  turnoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 20,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    textAlign: "center"
  },
  fecha: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond',
  },
  hora: {
    fontSize: 14,
    color: '#666',
    fontFamily: Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond',
  },
  nombre: {
    fontSize: 14,
    color: '#444',
    fontFamily: Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond',
  },
  noTurnos: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#888',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond',
  },
});

export default CardTurnos;
