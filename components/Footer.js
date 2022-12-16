import { View, Text } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import style from '../styles/styles';


export default function Footer() {


  const [fontsLoaded] = useFonts({
    'RampartOne': require("../assets/fonts/RampartOne-Regular.ttf"),
    
  });

  if (!fontsLoaded) {
    return null
  }


  return (
    <View style={style.footer}>
      <Text style={[style.author, {fontFamily: 'RampartOne'}]}>Author: Tero Hietala</Text>
    </View>
  )
}