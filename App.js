import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "e68fc57c89eaedfee40e66b22380fa35";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    console.log(data);
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading : false});
    } catch(error) {
      Alert.alert("can't get position!");
    }
  }
  componentDidMount() {
    this.getLocation();
  }

  render () {
    const {isLoading} = this.state;
    return isLoading ?  <Loading /> : null;
  }
}
