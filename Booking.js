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

const Bookings = (props) => {
  const [state,setState] = useState([]);
  useEffect(() => {
    getBooking();
  },[]);

  const getBooking = async () => {
    let token = await AsyncStorage.getItem('token');
    console.log(token);
    axios
      .get('http://api-staging.joinbubble.co.uk/api/booking/activesummary', {
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
      <Text onPress={getBooking}>{'Active Booking'}</Text>
    <Image source={{uri:state.profileImageUrl}}/>
      <Text>Id : {state.fullName}</Text>
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

export default Bookings;
