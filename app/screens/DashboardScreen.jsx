import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const DashboardScreen = () => {
  const data = [
    { value: 10, label: 'Ana' },
    { value: 8, label: 'María' },
    { value: 12, label: 'Laura' },
    { value: 6, label: 'Sofía' },
    { value: 9, label: 'Elena' },
    { value: 10, label: 'Ana' },
    { value: 8, label: 'María' },
    { value: 12, label: 'Laura' },
    { value: 6, label: 'Sofía' },
    { value: 9, label: 'Elena' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Clienta más recurrente: Laura (12 visitas)</Text>
      <BarChart
        data={data}
        barWidth={30}
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
    marginBottom:100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
     fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
  },
});

export default DashboardScreen;