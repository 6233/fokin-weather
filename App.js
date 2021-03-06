import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import Weather from './Weather'
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "e68fc57c89eaedfee40e66b22380fa35";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {data : {
      main: {temp},
      weather
    }} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading : false, condition: weather[0].main, temp});
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch(error) {
      Alert.alert("can't get position!");
    }
  }
  componentDidMount() {
    this.getLocation();
  }

  render () {
    const {isLoading, temp, condition} = this.state;
    return isLoading ?  <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
