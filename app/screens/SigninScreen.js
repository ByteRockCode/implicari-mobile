import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { TextInput } from '../../byterock-theme';


export default class SigninScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  onPressSignin() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>Correo</Text>

          <TextInput
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Contraseña</Text>

          <TextInput
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
          />
        </View>

        <View style={styles.margin} />

        <Button
          title="iniciar sesión"
          color="#343a40"
          onPress={this.onPressSignin}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#dc3545',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  label: {
    marginBottom: 10,
  },
  margin: {
    height: 40,
  },
  row: {
    marginBottom: 20,
  },
});
