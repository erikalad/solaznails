import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const CardProfile = ({ client }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.perfil}>{client.nombre}</Text>
      <ScrollView>
        <View style={styles.containerSection}>
          <Text style={styles.title}>Datos Personales</Text>
          <Text style={styles.campo}>Nombre: {client.nombre}</Text>
          <Text style={styles.campo}>
            Fecha de nac.: {client.fechaNacimiento}
          </Text>
          <Text style={styles.campo}>Teléfono: {client.telefono}</Text>
          <Text style={styles.campo}>Correo: {client.email}</Text>
        </View>

        <View style={styles.containerSection}>
          <Text style={styles.title}>Historial de Salud y Uñas</Text>
          <Text style={styles.campo}>
            Alergias conocidas: {client.salud?.alergias}
          </Text>
          <Text style={styles.campo}>
            Condiciones médicas: {client.salud?.condicionesMedicas}
          </Text>
          <Text style={styles.campo}>
            Estado de las uñas: {client.salud?.estadoUnas}
          </Text>
          <Text style={styles.campo}>
            Tratamientos previos: {client.salud?.tratamientosPrevios}
          </Text>
        </View>

        <View style={styles.containerSection}>
          <Text style={styles.title}>Preferencias de la clienta</Text>
          <Text style={styles.campo}>
            Colores preferidos: {client.preferencias?.colores}
          </Text>
          <Text style={styles.campo}>
            Forma de uñas preferidas: {client.preferencias?.formas}
          </Text>
          <Text style={styles.campo}>
            Frecuencia de visitas: {client.preferencias?.frecuencia}
          </Text>
        </View>

        <View style={styles.containerSection}>
          <Text style={styles.title}>Historial de servicios</Text>
          <Text style={styles.campo}>Última visita: {client.historial?.ultimaVisita}</Text>
          <Text style={styles.campo}>
            Servicios realizados: {client.historial?.servicios}
          </Text>
          <Text style={styles.campo}>
            Productos utilizados: {client.historial?.productos}
          </Text>
          <Text style={styles.campo}>Observaciones: {client.historial?.observaciones}</Text>
        </View>

        <View style={styles.containerSection}>
          <Text style={styles.title}>Comentarios adicionales</Text>
          <Text style={styles.campo}>
            Satisfacción del cliente: {client.comentarios?.satisfaccion}
          </Text>
          <Text style={styles.campo}>Sugerencias: {client.comentarios?.sugerencias}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  perfil: {
    textAlign: "center",
    margin: 10,
    fontSize: 15,
    fontFamily: "montserrat-bold",
    position: "sticky", // Hace que se quede pegado en la parte superior
    top: 0, // Pegado a la parte superior
    backgroundColor: "#fff", // Fondo blanco para que sea visible sobre el contenido
    zIndex: 10, // Asegura que quede por encima del contenido
    paddingVertical: 10, // Espacio adicional para que se vea bien
    borderBottomWidth: 1, // Opcional: para agregar una línea inferior
    borderBottomColor: "#ccc", // Color de la línea inferior
  },
  containerSection: {
    backgroundColor: "#f9e1e1",
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  container: {
    minWidth:'95%',
    flex: 1,
    maxHeight: 500,
  },
  campo: {
    fontSize: 13,
    fontFamily: "montserrat-medium",
  },
  title: {
    fontSize: 13,
    fontFamily: "montserrat-bold",
  },
});

export default CardProfile;
