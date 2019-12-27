/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';

import AppNav from './AppNavigator';
const App: () => React$Node = () => {
  return ( 
    <AppNav />
  );
};

export default App;
