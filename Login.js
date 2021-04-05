import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = (props) => {
  const [email, setEmail] = useState('janet.stevans@siliconrhino.io');
  const [password, setPassword] = useState('12345');

  const onLogin = () => {
    let data = {
      email: email,
      password: password,
    };
    axios
      .post('https://api-staging.joinbubble.co.uk/auth/local', data)
      .then((res) => {
        AsyncStorage.setItem('token', res.data.token);
        props.navigation.navigate('Home');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={require('./assets/logo-dark-on-light.png')} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          value={email}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          value={password}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
    height:"15%",
    width:"80%"
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    flex: 1,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'blue',
  },
  loginText: {
    color: '#fff',
  },
});

export default Login;
