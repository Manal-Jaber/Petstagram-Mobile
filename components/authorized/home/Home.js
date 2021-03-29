import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, FlatList, Image, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Line } from 'react-native-svg';

import Head from '../head/Head';
import Post from '../post/Post';


import cat from '../../../assets/cat.png';
import post from '../../../assets/post.png';
import owl from '../../../assets/owl.png';
import rabbit from '../../../assets/rabbit.png';
import dog from '../../../assets/dog.png';
import dog2 from '../../../assets/dog2.jpg';
import rabbit2 from '../../../assets/rabbit2.png';
import hamster from '../../../assets/hamster.png';
import hamster2 from '../../../assets/hamster2.png';
import panda from '../../../assets/panda.gif';
import turtle from '../../../assets/turtle.png';
import turtle2 from '../../../assets/turtle2.png';

export default function Home({render,setRender}) {

  const posts = [
    {
      id: 0,
      name: post,
      profile: cat,
      username: 'Lucinda',
     },
     {
       id: 1,
       name: owl,
       profile: panda,
       username: 'Sick',
     },
     {
       id: 2,
       name: rabbit,
       profile: rabbit2,
       username: 'Rabbit',
      },
      {
        id: 3,
        name: hamster2,
        profile: hamster,
        username: 'Ratatoille',
      },
      {
        id: 4,
        name: turtle,
        profile: turtle2,
        username: 'Slow',
       },
       {
         id: 5,
         name: dog2,
         profile: dog,
         username: 'Stella',
       },
    ]
    return (
      <ScrollView style={{ minHeight: 500 }} nestedScrollEnabled={true}>
        <View style={styles.container}>
          <Head render={render} setRender={setRender}/>
          {/*Here goes search and stories */}
          <Svg height="10" width="500" style={{alignSelf:'flex-start'}}>
            <Line x1="0" y1="0" x2="500" y2="0" stroke="black" strokeWidth="2" />
          </Svg>
          {/*to be done as a separate component and mapped from db */}
          <ScrollView nestedScrollEnabled={true} contentContainerStyle={{minHeight:300}} style={styles.flat}>
            <FlatList
              data={posts}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item},index) =><Post image={item.name} profile={item.profile} username={item.username}/>
              }
              showsHorizontalScrollIndicator={false}
            />
            <Text style={{textAlign:'center', fontWeight:'bold'}}>There are no more posts to show</Text>
          </ScrollView>
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
