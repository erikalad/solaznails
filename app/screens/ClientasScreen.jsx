import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Text, Button, Overlay } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Nav from '../../components/Nav';

// Datos de ejemplo
const clientData = [
  { id: 1, name: 'Ana García', lastVisit: '2023-06-01', visits: 10 },
  { id: 2, name: 'María López', lastVisit: '2023-05-28', visits: 8 },
  { id: 3, name: 'Laura Martínez', lastVisit: '2023-06-05', visits: 12 },
  // ... más datos de clientas
];

const ClientasScreen = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const tableHead = ['Nombre', 'Última Visita', 'Total Visitas'];
  const tableData = clientData.map(client => [
    client.name,
    client.lastVisit,
    client.visits.toString(),
  ]);

  const handleClientPress = (index) => {
    setSelectedClient(clientData[index]);
    setIsProfileVisible(true);
  };

  const ClientProfile = ({ client }) => (
    <ScrollView>
      <Text h4>Perfil de {client.name}</Text>
      
      <Text h5>1. Datos Personales</Text>
      <Text>Nombre: {client.name}</Text>
      <Text>Fecha de nac.: 18/05/1990</Text>
      <Text>Teléfono: +34 123 456 789</Text>
      <Text>Correo: {client.name.toLowerCase().replace(' ', '.')}@example.com</Text>
      
      <Text h5>2. Historial de Salud y Uñas</Text>
      <Text>Alergias conocidas: Ninguna</Text>
      <Text>Condiciones médicas: Ninguna</Text>
      <Text>Estado de las uñas: Bueno</Text>
      <Text>Tratamientos previos: Gel, esmalte semipermanente</Text>
      
      <Text h5>3. Preferencias de la clienta</Text>
      <Text>Colores preferidos: Rosa, nude</Text>
      <Text>Forma de uñas preferidas: Almendra</Text>
      <Text>Frecuencia de visitas: Quincenal</Text>
      
      <Text h5>4. Historial de servicios</Text>
      <Text>Última visita: {client.lastVisit}</Text>
      <Text>Servicios realizados: Manicura gel</Text>
      <Text>Productos utilizados: Esmalte gel "Pink Paradise"</Text>
      <Text>Observaciones: Cliente satisfecha con el resultado</Text>
      
      <Text h5>5. Comentarios adicionales</Text>
      <Text>Satisfacción del cliente: Muy satisfecha</Text>
      <Text>Sugerencias: Probar diseños con pedrería en próxima visita</Text>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
       <Nav name="Lista de Clientas"/>
      <Table>
        <Row data={tableHead} style={styles.head} textStyle={styles.headText}/>
        {
          tableData.map((rowData, index) => (
            <TouchableOpacity key={index} onPress={() => handleClientPress(index)}>
              <Row
                data={rowData}
                style={[styles.row, index%2 && {backgroundColor: '#fdfefe'}]}
                textStyle={styles.text}
              />
            </TouchableOpacity>
          ))
        }
      </Table>

      <Overlay isVisible={isProfileVisible} onBackdropPress={() => setIsProfileVisible(false)}>
        <View style={styles.overlay}>
          {selectedClient && <ClientProfile client={selectedClient} />}
          <Button
            title="Cerrar"
            onPress={() => setIsProfileVisible(false)}
            containerStyle={styles.closeButton}
          />
        </View>
      </Overlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fef5e7' },
  title: { marginBottom: 20 },
  head: { height: 40, backgroundColor: '#fad7a0' },
  headText: { margin: 6, fontWeight: 'bold' },
  text: { margin: 6 },
  row: { height: 40 },
  overlay: { width: 300, maxHeight: '80%' },
  closeButton: { marginTop: 20 }
});

export default ClientasScreen;

