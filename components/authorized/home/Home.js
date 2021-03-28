import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, FlatList, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Line } from 'react-native-svg';

import Head from '../head/Head';
import Post from '../post/Post';


import userProfile from '../../../assets/userProfile.png';
import post from '../../../assets/post.png';

export default function Home({render,setRender}) {
  const posts = [
    post, post, post, post, post, post, post, post, post, post, post, post, post
  ]
    return (
      <ScrollView>
        <View style={styles.container}>
          <Head render={render} setRender={setRender}/>
          {/*Here goes search and stories */}
          <Svg height="10" width="500" style={{alignSelf:'flex-start'}}>
            <Line x1="0" y1="0" x2="500" y2="0" stroke="black" strokeWidth="2" />
          </Svg>
          {/*to be done as a separate component and mapped from db */}
          <FlatList
            data={posts}
            // keyExtractor={(item) => item.id.toString()}
            renderItem={({item},index) => <Post image={post} profile={userProfile} username='Username'/>
            }
            showsHorizontalScrollIndicator={false}
          />
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
});
