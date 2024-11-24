import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

const CalendarScreen = () => {
  const [selected, setSelected] = useState(''); // Fecha seleccionada
  const [isModalVisible, setIsModalVisible] = useState(false); // Control del modal
  const [clientName, setClientName] = useState(''); // Nombre de la clienta
  const [appointmentTime, setAppointmentTime] = useState(''); // Hora de la cita
  const [agenda, setAgenda] = useState({}); // Agenda de citas

  const today = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD

  // Generar las fechas marcadas con puntos en el calendario
  const markedDates = Object.keys(agenda).reduce((acc, date) => {
    acc[date] = {
      marked: true,
      dotColor: date === today ? '#ff5722' : '#50cebb', // Día actual en naranja
    };
    return acc;
  }, {});

  const handleAddAppointment = () => {
    if (!clientName || !selected || !appointmentTime) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Actualizar la agenda con la nueva cita
    setAgenda((prev) => ({
      ...prev,
      [selected]: prev[selected]
        ? [...prev[selected], { name: clientName, time: appointmentTime }]
        : [{ name: clientName, time: appointmentTime }],
    }));

    // Limpiar campos y cerrar modal
    setClientName('');
    setAppointmentTime('');
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calendario de Citas</Text>

      {/* Calendario */}
      <Calendar
        onDayPress={(day) => setSelected(day.dateString)} // Establecer fecha seleccionada
        markedDates={{
          ...markedDates,
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
        }}
      />

      {/* Lista de citas para el día seleccionado */}
      <View style={styles.agenda}>
        {agenda[selected] ? (
          <>
            <Text style={styles.agendaTitle}>Citas para el {selected}:</Text>
            {agenda[selected].map((item, index) => (
              <Text key={index} style={styles.agendaItem}>
                - {item.name} a las {item.time}
              </Text>
            ))}
          </>
        ) : selected ? (
          <Text style={styles.noAgenda}>No hay citas para el {selected}.</Text>
        ) : (
          <Text style={styles.noAgenda}>Selecciona un día para ver las citas.</Text>
        )}
      </View>

      {/* Botón para abrir el modal */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          if (!selected) {
            alert('Primero selecciona un día en el calendario.');
            return;
          }
          setIsModalVisible(true);
        }}
      >
        <Text style={styles.addButtonText}>Agregar Cita</Text>
      </TouchableOpacity>

      {/* Modal para agregar citas */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar Nueva Cita</Text>

            {/* Nombre */}
            <TextInput
              style={styles.input}
              placeholder="Nombre de la Clienta"
              value={clientName}
              onChangeText={setClientName}
            />

            {/* Fecha seleccionada */}
            <Text style={styles.selectedDate}>
              Fecha seleccionada: {selected || 'Seleccione un día'}
            </Text>

            {/* Hora */}
            <TextInput
              style={styles.input}
              placeholder="Hora (ej. 10:00 AM)"
              value={appointmentTime}
              onChangeText={setAppointmentTime}
            />

            {/* Botones */}
            <Button title="Guardar" onPress={handleAddAppointment} />
            <Button title="Cancelar" color="red" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffebee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  agenda: {
    marginTop: 20,
  },
  agendaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  agendaItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  noAgenda: {
    fontSize: 16,
    color: '#888',
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#50cebb',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  selectedDate: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default CalendarScreen;
