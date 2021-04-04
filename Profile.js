import React, { useState, useEffect } from 'react';
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

const Profile = (props) => {
  const [state,setState] = useState([]);
  useEffect(() => {
    getProfile();
  },[]);

  const getProfile = async () => {
    let token = await AsyncStorage.getItem('token');
    console.log(token);
    axios
      .get('https://api-staging.joinbubble.co.uk/api/user', {
        headers: {     Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVmNDRkM2ZmMzM2ZjE4MDc2NGYxMjY1ZiIsInR5cGUiOiJtb2JpbGUiLCJpYXQiOjE2MTc1MjAxODcsImV4cCI6MTY2MTc1Njk4N30.5UbWERTQHu4EYJKpDwIu1NNjDIZFeCmkSQmKeSYZzn4'},
      })
      .then((res) => {
        setState(res.data)
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
        alert(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text onPress={getProfile}>{'My Profile'}</Text>
    <Image source={{uri:state.profileImageUrl}}/>
      <Text>Name : {state.fullName}</Text>
      <Text>Email : {state.email}</Text>
      <Text>Phone : {state.mobileNumber}</Text>
      <Text>Name : {state.firstName}</Text>
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
});

export default Profile;
