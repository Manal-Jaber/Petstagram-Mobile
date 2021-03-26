import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogoutAPI } from './LogoutAPI';

export default function Profile(props) {

  const handleLogout = async (e) => {
    e.preventDefault();
    const data = await LogoutAPI(await AsyncStorage.getItem('token'));
    if (data.message) {
      await AsyncStorage.removeItem('token');
      props.setRender(!props.render)
      // navigation.navigate('Login')
    }
  }
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <TouchableOpacity onPress={(e) => handleLogout(e)}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <StatusBar style="auto"/>
      </View>
    );
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    marginTop:10
  },
});
