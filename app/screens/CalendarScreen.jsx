import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Animated,
  Share,
  Platform,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "../../components/Nav";
import { useTurnos } from "./../../context/TurnosContext";
import DropDownPicker from 'react-native-dropdown-picker';


const CalendarScreen = () => {
  const { turnos, actualizarClienta, clientas, fetchTurnos } = useTurnos(); // Obtener turnos y función para agregar
  const [selected, setSelected] = useState(""); // Fecha seleccionada
  const [isModalVisible, setIsModalVisible] = useState(false); // Control del modal
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [items, setItems] = useState(clientas?.map(clienta => ({ label: clienta.nombre, value: clienta.nombre, id: clienta.id_clienta })));
  const [appointmentTime, setAppointmentTime] = useState(""); // Hora de la cita
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // Estado para controlar el alerta de éxito
  const [opacity] = useState(new Animated.Value(1)); // Opacidad para la animación
  
  useEffect(()=>{
    fetchTurnos()
  },[showSuccessAlert])

  const today = new Date().toISOString().split("T")[0]; // Fecha actual en formato YYYY-MM-DD

  // Generar las fechas marcadas con puntos en el calendario
  const markedDates = turnos.reduce((acc, turno) => {
    acc[turno.fecha] = {
      marked: true,
      dotColor: turno.fecha === today ? "#ff5722" : "#50cebb", // Día actual en naranja
    };
    return acc;
  }, {});

  console.log(selectedClient)


  const handleAddAppointment = () => {
    if (!selectedClient || !selected || !appointmentTime) {
      alert("Por favor completa todos los campos.");
      return;
    }
    const clientaSeleccionada = clientas.find(clienta => clienta.nombre === selectedClient);
    const data = {
      turnos: [
        {
        nombre: selectedClient,
        fecha: selected,
        hora: `${appointmentTime}:00`,
        cancelado: false
      }
    ]
    }

    console.log("lo que se manda", clientaSeleccionada.id_clienta,data)
    // Agregar el turno al contexto
    actualizarClienta(clientaSeleccionada.id_clienta,data);
  
    // Mostrar alerta de éxito
    setShowSuccessAlert(true);
  
    // Animar la opacidad para desaparecer lentamente
    Animated.timing(opacity, {
      toValue: 0,
      duration: 3000, // Duración de 3 segundos para el fade out
      useNativeDriver: true, // Especificar que se usará el motor nativo para la animación
    }).start();
  
    // Limpiar campos y cerrar modal
    setSelectedClient("");
    setAppointmentTime("");
    setIsModalVisible(false);
  
    // Ocultar el mensaje después de 30 segundos
    setTimeout(() => {
      setShowSuccessAlert(false); // Ocultar el mensaje
    }, 30000); // 30 segundos
  };


  const handleSendWhatsApp = async () => {
    try {
      await Share.share({
        message: `¡Hola ${selectedClient}! Soy Solaz. Tu turno está confirmado para el ${selected} a las ${appointmentTime}.`
      });
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <Nav name="Turnos" />
      {/* Calendario */}
      <Calendar
        onDayPress={(day) => setSelected(day.dateString)} // Establecer fecha seleccionada
        markedDates={{
          ...markedDates,
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />

      {/* Lista de citas para el día seleccionado */}
      <View style={styles.agenda}>
        {turnos.filter((turno) => turno.fecha === selected).length > 0 ? (
          <>
            <Text style={styles.agendaTitle}>Citas para el {selected}:</Text>
            {turnos
              .filter((turno) => turno.fecha === selected)
              .map((turno, index) => (
                <Text key={index} style={styles.agendaItem}>
                  - {turno.nombre} a las {turno.hora}
                </Text>
              ))}
          </>
        ) : selected ? (
          <Text style={styles.noAgenda}>No hay citas para el {selected}.</Text>
        ) : (
          <Text style={styles.noAgenda}>
            Selecciona un día para ver las citas.
          </Text>
        )}
      </View>

      {/* Botón para abrir el modal */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          if (!selected) {
            alert("Primero selecciona un día en el calendario.");
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

            {/* Fecha seleccionada */}
            <Text style={styles.selectedDate}>
              Fecha {selected}
            </Text>

            {/* Nombre */}
            <DropDownPicker
              open={open}
              value={selectedClient}
              items={items}
              setOpen={setOpen}
              setValue={setSelectedClient}
              setItems={setItems}
              placeholder="Selecciona una clienta"
              style={styles.input}
            />

            {/* Hora */}
            <TextInput
              style={styles.input}
              placeholder="Hora (ej. 10:30 o 10:00)"
              value={appointmentTime}
              onChangeText={setAppointmentTime}
              placeholderTextColor={"grey"}
              // keyboardType="numeric"
            />

            {/* Botones */}
            <View style={styles.botones}>
              <TouchableOpacity
                onPress={handleAddAppointment}
                style={styles.boton1}
              >
                <Text style={styles.textbutton1}>Guardar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                style={styles.boton2}
              >
                <Text style={styles.textbutton2}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Alert de éxito */}
      {showSuccessAlert && (
        <Animated.View style={[styles.successAlert, { opacity }]}>
          <Text style={styles.successText}>Turno asignado con éxito</Text>
          <TouchableOpacity onPress={handleSendWhatsApp}>
            <Text style={styles.whatsappLink}>Enviar por WhatsApp</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffebee",
  },
  botones: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textbutton1: {
    color: "white",
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
  textbutton2: {
    color: "white",
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
  boton1: {
    backgroundColor: "#d65b88",
    borderRadius: 10,
    padding: 10,
  },
  boton2: {
    backgroundColor: "#B44B4B",
    borderRadius: 10,
    padding: 10,
  },
  agenda: {
    marginTop: 20,
  },
  agendaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
  agendaItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  noAgenda: {
    fontSize: 16,
    color: "#888",
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
  addButton: {
    marginTop: 20,
    backgroundColor: "#50cebb",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    bottom:80
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    fontFamily: Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
  successAlert: {
    backgroundColor: "#dff0d8",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  successText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3c763d",
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond',
     position:"absolute"
  },
  whatsappLink: {
    fontSize: 16,
    color: "#25D366",
    marginTop: 10,
  },
  selectedDate: {
    fontSize: 16,
    marginBottom: 20,
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
});

export default CalendarScreen;
