import React, {useEffect} from 'react';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Authorized from './components/authorized/Authorized';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Cookie_400Regular } from '@expo-google-fonts/cookie';
import { Alice_400Regular } from '@expo-google-fonts/alice';
import { Salsa_400Regular } from '@expo-google-fonts/salsa';

import { LogBox } from 'react-native'
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
// console.log( Expo.Constants.manifest.extra.Host)
let [fontsLoaded] = useFonts({
  Cookie_400Regular,
  Alice_400Regular,
  Salsa_400Regular
});

if (!fontsLoaded) {
  return <AppLoading/>;
} else {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Authorized" component={Authorized} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}