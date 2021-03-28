import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LogoutAPI } from './LogoutAPI';
import Head from '../head/Head';

import profile from '../../../assets/profile.jpg';

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
      <ScrollView>
        <View style={styles.container}>
          <Head/>
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', alignItems:'center', margin:10}}>
            <View style={{alignItems:'center'}}>
              <Image source={profile} style={styles.bigProfile}/>
              <Text style={styles.ProfileText}>Fluffy</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <View style={{flex:1, flexDirection:'row'}}>
                <Text style={[styles.ProfileText,styles.Text]}>41 posts</Text>
                <Text style={[styles.ProfileText,styles.Text]}>100 sniffs</Text>
                <Text style={[styles.ProfileText,styles.Text]}>300 sniffing</Text>
              </View>
              <TouchableOpacity>
                <Text>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text>Profile</Text>
          <TouchableOpacity onPress={(e) => handleLogout(e)}>
            <Text>Logout</Text>
          </TouchableOpacity>
          <StatusBar style="auto"/>
        </View>
      </ScrollView>
    );
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    marginTop:10
  },
  bigProfile: {
    height:70,
    width:70,
    borderRadius: 70
  },
  ProfileText: {
    fontSize:15,
    paddingVertical:6,
    fontFamily: 'Salsa_400Regular',
  },
  Text: {
    width:50,
    margin:1,
  }
});