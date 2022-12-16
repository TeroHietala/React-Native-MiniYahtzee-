import React from "react";
import { Text, View } from "react-native";
import { useFonts } from 'expo-font';
import styles from "../styles/styles";




export default function Header() {


  const [fontsLoaded] = useFonts({
    'RampartOne': require("../assets/fonts/RampartOne-Regular.ttf"),
    
  });

  if (!fontsLoaded) {
    return null
  }
  
  return (
    <View style={styles.header}>
      <Text style={[styles.title, {fontFamily: 'RampartOne'}]}>Mini Yahzte</Text>
    </View>
  )
}