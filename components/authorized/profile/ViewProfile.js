import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import Head from '../head/Head';

import profile from '../../../assets/profile.jpg';
import image from '../../../assets/image.jpg';
import edit from '../../../assets/edit.png'

export default function ViewProfile({render,setRender}) {

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Head render={render} setRender={setRender}/>
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
            <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
              {/* <Text>Edit Profile</Text> */}
              <Image source={edit} style={{width:100, height:50, marginTop:10}}/>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.bio}>I am the cutest cat ever.{"\n"}
        You can get me at Peanuts.</Text>
        <Svg height="10" width="500">
          <Line x1="0" y1="0" x2="500" y2="0" stroke="#FEC3B9" strokeWidth="5" />
        </Svg>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image}/>
          <Image source={image} style={styles.image}/>
          <Image source={image} style={styles.image}/>
          <Image source={image} style={styles.image}/>
          <Image source={image} style={styles.image}/>
          <Image source={image} style={styles.image}/>
          <Image source={image} style={styles.image}/>
          <Image source={image} style={styles.image}/>
          <Image source={image} style={styles.image}/>
        </View>
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
    marginTop: 10,
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
  },
  bio: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: 'rgba(0,0,0,0.7)',
    margin: 10
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    width: 120,
    height:120
  }
});