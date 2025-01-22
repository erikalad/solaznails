import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { useTurnos } from '../../context/TurnosContext';

const DashboardScreen = () => {
    const { visitas } = useTurnos();
    
    // Función para convertir el formato y ordenar de mayor a menor
    const convertAndSortData = (input) => {
        return input
            .map((item) => ({
                value: parseInt(item.visitas, 10),
                label: item.name,
            }))
            .sort((a, b) => b.value - a.value); // Ordena de mayor a menor por visitas
    };

    // Datos convertidos y ordenados
   const data = convertAndSortData(visitas);

    // Encuentra la clienta más recurrente
    const topClient = data[0] || { value: 0, label: '' };

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>
                Clienta más recurrente: {topClient.label} ({topClient.value} visitas)
            </Text>
            <BarChart
                data={data}
                barWidth={100} 
                barBorderRadius={5}
                frontColor="#d65b88"
                yAxisThickness={0}
                xAxisThickness={0}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        fontFamily: Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond',
    },
});

export default DashboardScreen;
