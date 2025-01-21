import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Table, Row } from "react-native-table-component";
import { Button, Overlay } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "../../components/Nav";
import { useTurnos } from "../../context/TurnosContext";
import CardProfile from "../../components/CardProfile";

const ClientasScreen = () => {
  const { clientas, eliminarClienta, fetchClientas } = useTurnos();
  const [selectedClient, setSelectedClient] = useState(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [clientToDeleteIndex, setClientToDeleteIndex] = useState(null);

  useEffect(() => {
    fetchClientas();
  }, []);

  const tableHead = ["Nombre", "Última Visita", "Total Visitas"];
  const tableData = clientas.map((client) => [
    client.nombre,
    client.fechaNacimiento,
    client.turnos,
  ]);

  const handleClientPress = (index) => {
    setSelectedClient(clientas[index]);
    setIsProfileVisible(true);
  };

  const confirmDeleteClient = async () => {
    try {
      if (clientToDeleteIndex !== null) {
        await eliminarClienta(clientas[clientToDeleteIndex].id_clienta);
        setClientToDeleteIndex(null);
        setIsProfileVisible(false);
      }
    } catch (error) {
      console.error("Error al borrar la clienta:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Nav name="Lista de Clientas" />
      <Table>
        <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
        {tableData.map((rowData, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleClientPress(index)}
          >
            <Row
              data={rowData}
              style={[styles.row, index % 2 && { backgroundColor: "#fdfefe" }]}
              textStyle={styles.text}
            />
          </TouchableOpacity>
        ))}
      </Table>

      {/* Modal de perfil */}
      <Overlay
        isVisible={isProfileVisible}
        onBackdropPress={() => setIsProfileVisible(false)}
      >
        <View style={styles.overlay}>
          {selectedClient && <CardProfile client={selectedClient} />}
          <View style={styles.modalButtons}>
            <Button
              title="Editar"
              onPress={() => setIsProfileVisible(false)}
              containerStyle={styles.modalButton}
            />
            <Button
              title="Eliminar"
              onPress={confirmDeleteClient}
              buttonStyle={{ backgroundColor: "#B44B4B" }}
              containerStyle={styles.modalButton}
            />
          </View>
        </View>
      </Overlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fef5e7",
  },
  head: { height: 40, backgroundColor: "#fad7a0" },
  headText: { margin: 6, fontWeight: "bold" },
  text: { margin: 6 },
  row: { height: 40 },
  closeButton: { marginTop: 20 },
  confirmationModal: { padding: 20, alignItems: "center", width: "50%" },
  confirmationText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "montserrat-medium",
  },
  modalButtons: { flexDirection: "row", justifyContent: "space-between" },
  modalButton: {
    marginHorizontal: 5,
    marginTop:10,
    width: 100,
    fontFamily: "montserrat-medium",
  },
});

export default ClientasScreen;
