import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
import axios from 'axios';
import * as constants from '../constants';

export default class Login extends Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login() {
    // console.log();
    this.submit();
    // this.submit().then(result => {
    //   this.notifyMessage(result.data.msg);
    // });
    //this.notifyMessage(loginResponse.msg);
    // console.log(loginResponse);
  }

  notifyMessage(msg: string) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  }

  async submit() {
    // var data;
    const obj = {
      email_id: this.state.email,
      password: this.state.password,
    };

    const options = {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    };

    const res = await axios.post(
      constants.baseUrl + 'login',
      {email_id: this.state.email, password: this.state.password},
      options,
    );
    const status = await res.data.status;
    if (status === true) {
      this.notifyMessage(res.data.msg);
    } else {
      this.notifyMessage(res.data.msg);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require('../../assets/images/the-date-project-logo.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: 'https://png.icons8.com/message/ultraviolet/50/3498db',
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.login()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        {/* <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
  logo: {
    width: 75,
    height: 75,
    marginBottom: 100,
  },
});