import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ClientFormScreen = () => {
  // Estados para cada campo
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  const [nailCondition, setNailCondition] = useState('');
  const [previousTreatments, setPreviousTreatments] = useState('');
  const [favoriteColors, setFavoriteColors] = useState('');
  const [favoriteShapes, setFavoriteShapes] = useState('');
  const [visitFrequency, setVisitFrequency] = useState('');
  const [lastVisit, setLastVisit] = useState('');
  const [services, setServices] = useState('');
  const [products, setProducts] = useState('');
  const [observations, setObservations] = useState('');
  const [clientSatisfaction, setClientSatisfaction] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleSubmit = () => {
    const clientData = {
      name,
      birthdate,
      phone,
      email,
      allergies,
      medicalConditions,
      nailCondition,
      previousTreatments,
      favoriteColors,
      favoriteShapes,
      visitFrequency,
      lastVisit,
      services,
      products,
      observations,
      clientSatisfaction,
      suggestions,
    };
    console.log('Datos de la clienta:', clientData);

    // Resetear los campos
    setName('');
    setBirthdate('');
    setPhone('');
    setEmail('');
    setAllergies('');
    setMedicalConditions('');
    setNailCondition('');
    setPreviousTreatments('');
    setFavoriteColors('');
    setFavoriteShapes('');
    setVisitFrequency('');
    setLastVisit('');
    setServices('');
    setProducts('');
    setObservations('');
    setClientSatisfaction('');
    setSuggestions('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Nueva Clienta</Text>

        <Text style={styles.sectionTitle}>1. Datos Personales</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
           placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de nacimiento (DD/MM/AAAA)"
          value={birthdate}
          onChangeText={setBirthdate}
           placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
           placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
           placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.sectionTitle}>2. Historial de Salud y Uñas</Text>
        <TextInput
          style={styles.input}
          placeholder="Alergias conocidas"
          value={allergies}
          onChangeText={setAllergies}
           placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Condiciones médicas"
          value={medicalConditions}
          onChangeText={setMedicalConditions}
           placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Estado de las uñas"
          value={nailCondition}
          onChangeText={setNailCondition}
           placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Tratamientos previos"
          value={previousTreatments}
          onChangeText={setPreviousTreatments}
           placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.sectionTitle}>3. Preferencias de la Clienta</Text>
        <TextInput
          style={styles.input}
          placeholder="Colores preferidos"
          value={favoriteColors}
          onChangeText={setFavoriteColors}
           placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Formas de uñas preferidas"
          value={favoriteShapes}
          onChangeText={setFavoriteShapes}
           placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Frecuencia de visitas"
          value={visitFrequency}
          onChangeText={setVisitFrequency}
           placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.sectionTitle}>4. Historial de Servicios</Text>
        <TextInput
          style={styles.input}
          placeholder="Última visita (DD/MM/AAAA)"
          value={lastVisit}
          onChangeText={setLastVisit}
           placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Servicios realizados"
          value={services}
          onChangeText={setServices}
           placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Productos utilizados"
          value={products}
          onChangeText={setProducts}
           placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Observaciones"
          value={observations}
          onChangeText={setObservations}
           placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.sectionTitle}>5. Comentarios Adicionales</Text>
        <TextInput
          style={styles.input}
          placeholder="Satisfacción del cliente"
          value={clientSatisfaction}
          onChangeText={setClientSatisfaction}
           placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Sugerencias"
          value={suggestions}
          onChangeText={setSuggestions}
           placeholderTextColor="#a9a9a9"
        />

        <Button title="Guardar Clienta" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3e5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default ClientFormScreen;
