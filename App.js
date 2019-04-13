import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import store from './app/store';
import LandingScreen from './app/screens/LandingScreen';
import SigninScreen from './app/screens/SigninScreen';
import SignupScreen from './app/screens/SignupScreen';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>

        <Router>
          <Scene key="root">
            <Scene key="landing" component={LandingScreen} hideNavBar initial />
            <Scene key="signin" title="Iniciar sesión" component={SigninScreen} />
            <Scene key="signup" title="Registrarse" component={SignupScreen} />
          </Scene>
        </Router>

      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
