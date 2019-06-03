import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import store from './app/store';
import colors from './app/utils/colors';
import LandingScreen from './app/screens/LandingScreen';
import SigninScreen from './app/screens/SigninScreen';
import SignupScreen from './app/screens/SignupScreen';
import ClassroomListScreen from './app/screens/Classrooms/ClassroomListScreen';


export default class App extends React.Component {
  render() {

    const scene_props = {
      navigationBarStyle: styles.sceneNavigationBar,
      titleStyle: styles.sceneTitle,
    }

    return (
      <Provider store={store} sceneStyle={styles.routerSceneStyle}>

        <Router>
          <Scene key="root">
            <Scene {...scene_props} key="landing" component={LandingScreen} hideNavBar />
            <Scene {...scene_props} key="signin" title="Iniciar sesión" component={SigninScreen} />
            <Scene {...scene_props} key="signup" title="Registrarse" component={SignupScreen} />
            <Scene {...scene_props} key="classroom_list" title="Cursos" component={ClassroomListScreen} initial />
          </Scene>
        </Router>

      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  routerSceneStyle: {
    backgroundColor: colors.white,
    color: colors.dark,
  },
  sceneNavigationBar: {
    backgroundColor: colors.dark,
  },
  sceneTitle: {
    color: colors.white,
  }
});
