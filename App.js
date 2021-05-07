import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
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
