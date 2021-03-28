import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import Head from '../head/Head';

import profile from '../../../assets/profile.jpg';
import image0 from '../../../assets/image0.jpg';
import image1 from '../../../assets/image1.jpg';
import image2 from '../../../assets/image2.jpeg';
import image3 from '../../../assets/image3.jpg';
import image4 from '../../../assets/image4.jpg';
import image5 from '../../../assets/image5.jpg';
import image6 from '../../../assets/image6.png';
import image7 from '../../../assets/image7.png';
import image8 from '../../../assets/image8.jpg';
import edit from '../../../assets/edit.png'

export default function ViewProfile({render,setRender}) {
  
  const images = [
    image0, image1, image2, image3, image4, image5, image6, image7, image8
  ]

  const navigation = useNavigation();

  const username = 'Fluffy'
  return (
    <ScrollView>
      <View style={styles.container}>
        <Head render={render} setRender={setRender}/>
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', alignItems:'center', margin:10}}>
          <View style={{alignItems:'center'}}>
            <Image source={profile} style={styles.bigProfile}/>
            <Text style={styles.ProfileText}>{username}</Text>
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
          <FlatList
          numColumns={3}
            data={images}
            // keyExtractor={(item) => item.id.toString()}
            renderItem={({item},index) => <TouchableOpacity key={index} onPress={()=> navigation.navigate('MyPost', {'image': item, 'profile': profile, 'username': username})}>
                <Image source={item} style={styles.image}/>
              </TouchableOpacity>
            }
            showsHorizontalScrollIndicator={false}
          />
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