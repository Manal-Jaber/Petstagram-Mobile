import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Line } from 'react-native-svg';

import logo from '../../../assets/logo.png';
import profile from '../../../assets/profile.jpg';
import userProfile from '../../../assets/userProfile.png';
import post from '../../../assets/post.png';

export default function Home() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headLogoText}>Petstagram</Text>
          {/*To be added here dropdown menu*/}
          <View style={styles.profileHead}>
            <Image source={profile} style={styles.profile}/>
            <Text style={styles.headProfileText}>Fluffy</Text>
          </View>
          <Image source={logo} style={{height:50, width:50}}/>
        </View>
        {/*Here goes search and stories */}
        <Svg height="65" width="500" style={{position:'absolute', alignSelf:'flex-start'}}>
          <Line x1="0" y1="65" x2="500" y2="65" stroke="black" strokeWidth="2" />
        </Svg>
        {/*to be done as a separate component and mapped from db */}
        <View style={{alignSelf: 'flex-start', flexDirection:'column', alignItems:'flex-start'}}>
          <View style={styles.profileHead}>
            <Image source={userProfile} style={styles.profile}/>
            <Text style={styles.headProfileText}>Username</Text>
          </View>
          <Image source={post} style={styles.postImage}/>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{margin:10}}>
              <Image source={logo} style={{height:25, width:25, opacity: 0.5}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10}}>
              <Text style={styles.headProfileText}>Quote goes here</Text>
            </TouchableOpacity>
            {/*here goes the message icon*/}
          </View>
        </View>
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
  head: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    // maxHeight:100,
    margin: 10,
  },
  headLogoText: {
    fontSize:36,
    paddingVertical:6,
    fontFamily: 'Cookie_400Regular',
  },
  profileHead: {
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    width: 120,
  },
  headProfileText: {
    fontSize:15,
    paddingVertical:6,
    fontFamily: 'Salsa_400Regular',
  },
  profile: {
    height:30,
    width:30,
    borderRadius: 30
  },
  /*Here goes styling of post to be copied to component*/
  postImage: {
    width: 365,
    height: 300
  }
});
