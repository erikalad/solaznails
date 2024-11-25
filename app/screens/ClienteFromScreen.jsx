import React, { useEffect, useState } from 'react';
import { TextInput, Button, StyleSheet, Text, ScrollView, TouchableOpacity, View, KeyboardAvoidingView, Platform, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Nav from '../../components/Nav';
import { useNavigation } from 'expo-router';

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
  const [error, setError] = useState(true)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // Estado para controlar el alerta de éxito
  const [opacity] = useState(new Animated.Value(1)); // Opacidad para la animación
  const navigation = useNavigation()


  const handleSubmit = () => {
    setShowSuccessAlert(true)
        // Animar la opacidad para desaparecer lentamente
        Animated.timing(opacity, {
          toValue: 0,
          duration: 3000, // Duración de 3 segundos para el fade out
          useNativeDriver: true, // Especificar que se usará el motor nativo para la animación
        }).start();
        setTimeout(() => {
          navigation.navigate('init')
        },1000); // 30 segundos
    
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

  useEffect(()=>{
    if(name && phone){
      setError(false)
    }
  },[name, phone])

  return (
    <SafeAreaView style={styles.container}>
       <Nav name="Nueva Clienta"/>
       <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80} // Ajusta esto según tu diseño
      >
      <ScrollView
           showsVerticalScrollIndicator={false}
           nestedScrollEnabled={true}
           keyboardShouldPersistTaps="handled"
           contentContainerStyle={{ flexGrow: 1 }}
           >
        <Text style={styles.sectionTitle}>1. Datos Personales</Text>
        <TextInput
         style={styles.input}
          placeholder={ "Nombre *"}
          value={name}
          onChangeText={setName}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de nacimiento (DD/MM/AAAA)"
          value={birthdate}
          onChangeText={setBirthdate}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />
        <TextInput
         style={styles.input}
         placeholder={"Teléfono *"}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />

        <Text style={styles.sectionTitle}>2. Historial de Salud y Uñas</Text>
        <TextInput
          style={styles.input}
          placeholder="Alergias conocidas"
          value={allergies}
          onChangeText={setAllergies}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Condiciones médicas"
          value={medicalConditions}
          onChangeText={setMedicalConditions}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado de las uñas"
          value={nailCondition}
          onChangeText={setNailCondition}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Tratamientos previos"
          value={previousTreatments}
          onChangeText={setPreviousTreatments}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />

        <Text style={styles.sectionTitle}>3. Preferencias de la Clienta</Text>
        <TextInput
          style={styles.input}
          placeholder="Colores preferidos"
          value={favoriteColors}
          onChangeText={setFavoriteColors}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Formas de uñas preferidas"
          value={favoriteShapes}
          onChangeText={setFavoriteShapes}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Frecuencia de visitas"
          value={visitFrequency}
          onChangeText={setVisitFrequency}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />

        <Text style={styles.sectionTitle}>4. Historial de Servicios</Text>
        <TextInput
          style={styles.input}
          placeholder="Última visita (DD/MM/AAAA)"
          value={lastVisit}
          onChangeText={setLastVisit}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Servicios realizados"
          value={services}
          onChangeText={setServices}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Productos utilizados"
          value={products}
          onChangeText={setProducts}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Observaciones"
          value={observations}
          onChangeText={setObservations}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />

        <Text style={styles.sectionTitle}>5. Comentarios Adicionales</Text>
        <TextInput
          style={styles.input}
          placeholder="Satisfacción del cliente"
          value={clientSatisfaction}
          onChangeText={setClientSatisfaction}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Sugerencias"
          value={suggestions}
          onChangeText={setSuggestions}
           placeholderTextColor={Platform.OS === 'ios' ? 'grey' : 'black'}
        />

      </ScrollView>
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={error ? console.log('no') : handleSubmit} activeOpacity={error ? 1 : 0.8}>
         <View style={[styles.boton, error ? styles.error : null]}>
         <Text style={styles.textbutton}>Guardar</Text>
         </View>
        </TouchableOpacity>

          {/* Alert de éxito */}
      {showSuccessAlert && (
        <Animated.View style={[styles.successAlert, { opacity }]}>
          <Text style={styles.successText}>Clienta creada con éxito</Text>
        </Animated.View>
       )} 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3e5f5',
  },
  textbutton: {
    fontSize:16,
    color: "white",
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
  boton: {
    marginTop:20,
    backgroundColor: "#d65b88",
    borderRadius: 10,
    padding: 20,
    justifyContent:"center",
    alignItems:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
  input: {
    height: Platform.OS === 'ios' ? 40 : 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontFamily: 'montserrat'
  },
  inputError:{
    backgroundColor:"#B44B4B1A",
  },
  error:{
    backgroundColor:"#d65b886e"
  },
  successAlert: {
    backgroundColor: "#dff0d8",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
    position:"absolute",
    left:'25%'
  },
  successText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3c763d",
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
  whatsappLink: {
    fontSize: 16,
    color: "#25D366",
    marginTop: 10,
  },
});

export default ClientFormScreen;
