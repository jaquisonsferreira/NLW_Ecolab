import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Roboto_400, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubunto_700Bold, useFonts } from "@expo-google-fonts/ubuntu";

import Home from "./src/Pages/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400,
    Roboto_500Medium,
    Ubunto_700Bold,
  });
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent" // utilizado para android
        translucent //coloca os elementos para ficar em baixo, caso contrario fica com cor fixa
      />
      <Home />
    </>
  );
}
