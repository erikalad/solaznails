import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import CalendarScreen from "./screens/CalendarScreen";
import ClienteFromScreen from "./screens/ClienteFromScreen";
import GalleryScreen from "./screens/GalleryScreen";
import ClientasScreen from "./screens/ClientasScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import { TurnosProvider } from "./../context/TurnosContext";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'montserrat-black': require('./../assets/fonts/Montserrat-Black.ttf'),
    'montserrat-black-italic': require('./../assets/fonts/Montserrat-BlackItalic.ttf'),
    'montserrat-bold': require('./../assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-bold-italic': require('./../assets/fonts/Montserrat-BoldItalic.ttf'),
    'montserrat-extra-bold': require('./../assets/fonts/Montserrat-ExtraBold.ttf'),
    'montserrat-extra-bold-italic': require('./../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
    'montserrat-extra-light': require('./../assets/fonts/Montserrat-ExtraLight.ttf'),
    'montserrat-extra-light-italic': require('./../assets/fonts/Montserrat-ExtraLightItalic.ttf'),
    'montserrat-italic': require('./../assets/fonts/Montserrat-Italic.ttf'),
    'montserrat-light': require('./../assets/fonts/Montserrat-Light.ttf'),
    'montserrat-light-italic': require('./../assets/fonts/Montserrat-LightItalic.ttf'),
    'montserrat-medium': require('./../assets/fonts/Montserrat-Medium.ttf'),
    'montserrat-medium-italic': require('./../assets/fonts/Montserrat-MediumItalic.ttf'),
    'montserrat-regular': require('./../assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-semi-bold': require('./../assets/fonts/Montserrat-SemiBold.ttf'),
    'montserrat-semi-bold-italic': require('./../assets/fonts/Montserrat-SemiBoldItalic.ttf'),
    'montserrat-thin': require('./../assets/fonts/Montserrat-Thin.ttf'),
    'montserrat-thin-italic': require('./../assets/fonts/Montserrat-ThinItalic.ttf'),
    'montserrat-variable': require('./../assets/fonts/Montserrat-VariableFont_wght.ttf'),
  });
};

export default function IndexScreen() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <TurnosProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <Stack.Navigator initialRouteName="init">
            <Stack.Screen
              name="init"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Calendar"
              component={CalendarScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClienteFrom"
              component={ClienteFromScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Clientas"
              component={ClientasScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Gallery"
              component={GalleryScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </TurnosProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", // Ajusta el fondo según sea necesario.
  },
});