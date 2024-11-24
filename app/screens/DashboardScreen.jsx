import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { SafeAreaView } from 'react-native-safe-area-context';
import Nav from '../../components/Nav';

const DashboardScreen = () => {
  const data = [
    { value: 10, label: 'Ana' },
    { value: 8, label: 'María' },
    { value: 12, label: 'Laura' },
    { value: 6, label: 'Sofía' },
    { value: 9, label: 'Elena' },
  ];

  return (
    <SafeAreaView style={styles.container}>
       <Nav name="Dashboard"/>
      <Text style={styles.subtitle}>Clienta más recurrente: Laura (12 visitas)</Text>
      <BarChart
        data={data}
        barWidth={30}
        barBorderRadius={5}
        frontColor="#72B4A1"
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default DashboardScreen;