import React, {useState,useEffect} from 'react';
import Authorized from './components/authorized/Authorized';
import NonAuthorized from './components/login/NonAuthorized';

import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Cookie_400Regular } from '@expo-google-fonts/cookie';
import { Alice_400Regular } from '@expo-google-fonts/alice';
import { Salsa_400Regular } from '@expo-google-fonts/salsa';

import { LogBox } from 'react-native'
LogBox.ignoreAllLogs();

export default function App() {
// console.log( Expo.Constants.manifest.extra.Host)
let [fontsLoaded] = useFonts({
  Cookie_400Regular,
  Alice_400Regular,
  Salsa_400Regular
});

const [token, setToken] = useState('')
const [render, setRender] = useState(false)
useEffect(() => {
  const getToken = async()=>{
    setToken(await AsyncStorage.getItem('token'))
  }
  getToken()
}, [render])

if (!fontsLoaded) {
  return <AppLoading/>;
} else {
  return (
    <NavigationContainer>
      {token?
      <Authorized render={render} setRender={setRender}/>:
      <NonAuthorized render={render} setRender={setRender}/>} 
    </NavigationContainer>
  );
}
}