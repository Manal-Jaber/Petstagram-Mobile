import React, {useEffect} from 'react';
import { Image, StyleSheet} from 'react-native';
import Home from './home/Home';
import Chat from './chat/Chat';
import Camera from './camera/Camera';
import Profile from './profile/Profile';

import homeIcon from '../../assets/home.png'
import chatIcon from '../../assets/chat.png'
import cameraIcon from '../../assets/camera.png'
import profileIcon from '../../assets/profile.jpg';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Authorized({ navigation }) {

  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: 'black', }}>
        <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarOptions: { showIcon: true, },
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={homeIcon}
            />
          ), 
        }}/>
        <Tab.Screen name="Chat" component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarOptions: { showIcon: true, },
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={chatIcon}
            />
          ), 
        }}/>
        <Tab.Screen name="Camera" component={Camera}
        options={{
          tabBarLabel: 'Camera',
          tabBarOptions: { showIcon: true, },
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={cameraIcon}
            />
          ), 
        }}/>
        <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarOptions: { showIcon: true},
          tabBarIcon: () => (
            <Image
              style={{ width:25, height:25, borderRadius:25 }}
              source={profileIcon}
            />
          ), 
        }}/>
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  icon: {
    width:25,
    height:25,
  },
});
