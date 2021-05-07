import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Proptypes from "prop-types";

export default function Weather({temp}) {
  return (
  <View style = {styles.container}>
    <Text>{temp}</Text>

  </View>
  );
}

Weather.Proptypes = {
  temp: Proptypes.number.isRequired,
  condition: Proptypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Dust'
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
})