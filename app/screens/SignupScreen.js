import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Provider } from 'react-redux';


export default class SignupScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      author: '',
      quote: '',
    };
  }

  onPressSignin() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>Correo</Text>

          <TextInput
              onChangeText={(text) => this.setState({email: text})}
              style={styles.input}
              value={this.state.email}
          />
        </View>

        <View style={styles.row}>
          <Text>Contraseña</Text>

          <TextInput
              onChangeText={(text) => this.setState({password: text})}
              style={styles.input}
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
  row: {
    marginBottom: 20,
  },
  input: {
    borderColor: '#343a40',
    borderWidth: 1,
    padding: 5,
  },
  margin: {
    height: 40,
  },
});
