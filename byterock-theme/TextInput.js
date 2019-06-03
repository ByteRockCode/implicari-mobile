import React from 'react';
import { StyleSheet, TextInput as TextInputBase } from 'react-native';


export default class TextInput extends React.Component {

  render() {
    return (
      <TextInputBase style={styles.input} {...this.props} />
    );
  }

}


const styles = StyleSheet.create({
  input: {
    borderColor: '#343a40',
    borderWidth: 1,
    padding: 10,
  },
});
