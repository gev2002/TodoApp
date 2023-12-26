import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import store from './store';
import Navigation from './Navigation';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
        <StatusBar hidden />
      </Provider>
    );
  }
}

export default App;
