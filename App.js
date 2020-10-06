import * as React from 'react';
import {View} from 'react-native';
import HomeScreen from './screens/Home';
import JokeScreen from './screens/Joke';
import HororscopeScreen from './screens/Hororscope';
import WeatherScreen from './screens/Weather';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  WeatherScreen:WeatherScreen,
  HororscopeScreen:HororscopeScreen
})

const AppContainer = createAppContainer(AppNavigator);