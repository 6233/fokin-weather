import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import Proptypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName : "weather-hail",
    gradient : ["#4DA0B0", "#D39D38"],
    title : "Haze",
    subtitle: "WTF!"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstrom",
    subtitle: "kill the diablo!!"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Hmmmm...."
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Rain",
    subtitle: "rain is coming!"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "do you wanna build snowman?"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Sunny",
    subtitle: "go to outside!"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title : "Clouds",
    subtitle : "cloud is koran bear!"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title : "Mist",
    subtitle : "if u want to buy mist, go to oliveyoung....."
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title : "Dust",
    subtitle: "thanks china!!"
  }
};

export default function Weather({temp, condition}) {
  return (
    <LinearGradient colors = {weatherOptions[condition].gradient} style = {styles.container}>
      <View style = {styles.halfContainer}>
      <MaterialCommunityIcons size={96} name = {weatherOptions[condition].iconName} color = "white" />
      <Text style = {styles.temp}>{temp}º</Text>
      </View>
      <View style = {{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style = {styles.title}>{weatherOptions[condition].title}</Text>
        <Text style = {styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
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
    justifyContent : "center",
    alignItems : "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize : 44,
    marginBottom : 10,
    color: "white",
    fontWeight: "300",
    textAlign: "left"
  },
  subtitle: {
    fontWeight : "600",
    color : "white",
    fontSize: 24,
    textAlign: "left"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
})