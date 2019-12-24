/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LoginInput from './src/components/Login/LoginInput';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <LoginInput />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
         //alignItems: 'center',
        justifyContent: 'center'
    }
});

export default App;
