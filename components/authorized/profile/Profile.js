import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import NonAuthorized from '../../login/NonAuthorized'
import { useRoute, useNavigationState, } from '@react-navigation/native';
import { SairaExtraCondensed_400Regular } from '@expo-google-fonts/dev';


export default function Profile(props) {

  const handleLogout = async (e) => {
    e.preventDefault();
    console.log(await AsyncStorage.getItem('token'))
    const response = await fetch(`${Expo.Constants.manifest.extra.Host}/api/logout`, {
        method: 'Post',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
        }
    })
    const data = await response.json()
    // console.log(data)
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
