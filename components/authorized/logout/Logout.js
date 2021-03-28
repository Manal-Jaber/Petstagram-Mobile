import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LogoutAPI } from './LogoutAPI';

export default function Logout({render, setRender}) {

  const handleLogout = async (e) => {
    e.preventDefault();
    const data = await LogoutAPI(await AsyncStorage.getItem('token'));
    if (data.message) {
      await AsyncStorage.removeItem('token');
      setRender(!render)
      // navigation.navigate('Login')
    }
  }
  return(
    <TouchableOpacity onPress={(e) => handleLogout(e)}>
        <Text style ={styles.logout}>Logout</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    logout: {
      fontSize:15,
      paddingVertical:6,
      fontFamily: 'Salsa_400Regular',
      color: '#750404'
    },
  });