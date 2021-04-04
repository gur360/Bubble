import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View, TextInput, Image,
  TouchableOpacity, Button,
  ViewComponent
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const App = (props) => {
  const [email, setEmail] = useState('janet.stevans@siliconrhino.io');
  const [password, setPassword] = useState('12345');

  const onLogin = () => {
    let data = {
      email: email,
      password: password,
    };
    const header = {
      'Content-Type':'application/json'
      }
    axios
      .post('https://api-staging.joinbubble.co.uk/auth/local', data,{headers:header})
      .then((res) => {
        console.log(res.data.token);
        AsyncStorage.setItem('token', res.data.token);
        props.navigation.navigate('Home');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.Image} resizeMode="contain" source={require('./assets/logo-dark-on-light.png')}

      />


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={email}
          placeholder="Enter Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={password}
          placeholder="Enter Password"
          placeholderTextColor='#003f5c'
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>



      <TouchableOpacity onPress={onLogin}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>


  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#846db0",
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    marginBottom: 10,
    flex:1,
    height: '100%',
    width:'100%',
    position: 'absolute',
    top:-200
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "80%",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,


  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#28b99d"
  },
});
export default App;