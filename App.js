import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';


export default class WeatherScreen extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }

  getWeather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=23.1294&lon=83.1861';
    return fetch(url)
    .then(response => response.json())
    .then (b => {
      this.setState({
        weather: b
       })
    })

    .catch(error => {
      console.error(error)
    })

  };

  componentDidMount = () => {
    this.getWeather();
  };

  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Weather : {this.state.weather.weather[0].description}</Text>
          <Text>Wind Speed : {this.state.weather.wind.speed}</Text>
          <Text>Temprature : {this.state.weather.main.temp}</Text>
          <Text>Min Temprature : {this.state.weather.main.temp_min}</Text>
          <Text>Max Temprature : {this.state.weather.main.temp_max}</Text>
          <Text>Pressure : {this.state.weather.main.pressure}</Text>
          <Text>Humidity : {this.state.weather.main.humidity}</Text>
          <Text>Name : {this.state.weather.name}</Text>
          <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"black"}}>Back</Text>
        </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 160,
    height: 50,
  }
});


