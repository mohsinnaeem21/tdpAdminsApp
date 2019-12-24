import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

import {Input} from 'react-native-elements';

const LoginInput = () => {
  return (
    <View style={StyleSheet.container}>
      <Input style={styles.input}/>
      <Input style={styles.input}/>
    </View>
  );
};
export default LoginInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems:'stretch'
  },
  input: {
    backgroundColor: 'blue',
    alignSelf: 'stretch'
  }
});
