import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';

import logo from '../../../assets/logo.png';
import chat from '../../../assets/chat.png'

export default function Post({image, profile, username}) {
    return (
        <View style={{alignSelf: 'flex-start', flexDirection:'column', alignItems:'flex-start'}}>
            <View style={styles.profileHead}>
              <Image source={profile} style={styles.profile}/>
              <Text style={styles.headProfileText}>{username}</Text>
            </View>
            <Image source={image} style={styles.postImage}/>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{margin:10}}>
                    <TouchableOpacity>
                        <Image source={logo} style={{height:25, width:25, opacity: 0.5}}/>
                    </TouchableOpacity>
                    <Text style={styles.headProfileText}>6 purrs</Text>
                </View>
              <TouchableOpacity style={{margin:10}}>
                <Text style={styles.headProfileText}>Quote goes here</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:10}}>
                <Image style={{width: 20, height: 20}} source={chat}/>
              </TouchableOpacity>
              {/*here goes the message icon*/}
            </View>
          </View>
    )
}
const styles = StyleSheet.create({
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
    postImage: {
      width: 365,
      height: 300
    }
  });
  