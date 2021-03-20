import React, {useEffect} from 'react';
import Home from './home/Home';
import Chat from './chat/Chat';
import Camera from './camera/Camera';
import Profile from './profile/Profile';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function Authorized({ navigation }) {

  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}