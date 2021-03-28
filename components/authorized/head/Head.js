import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import ProfilePicker from '../profile/ProfilePicker'

import logo from '../../../assets/logo.png';

export default function Head({render,setRender}) {
return(
    <View style={styles.head}>
        <Text style={styles.headLogoText}>Petstagram</Text>
        <ProfilePicker render={render} setRender={setRender}/>
        <Image source={logo} style={{height:50, width:50}}/>
    </View>
)
}
const styles = StyleSheet.create({
    head: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'space-between',
      // maxHeight:100,
      height:50,
      margin: 10,
      paddingVertical:0
    },
    headLogoText: {
      fontSize:36,
      paddingVertical:6,
      fontFamily: 'Cookie_400Regular',
      height:60
    },
  });
  