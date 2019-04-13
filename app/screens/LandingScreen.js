import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Actions } from 'react-native-router-flux';



export default class LandingScreen extends React.Component {
  onPressSignin() {
    Actions.signin();
  }

  onPressSignup() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Implicari</Text>

        <View>
          <Button
            title="iniciar sesión"
            color="#343a40"
            onPress={this.onPressSignin}
          />

          <View style={styles.margin} />

          <Button
            title="registrarse"
            color="#343a40"
            onPress={this.onPressSignup}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#dc3545',
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 40,
  },
  margin: {
    height: 40,
  },
});
