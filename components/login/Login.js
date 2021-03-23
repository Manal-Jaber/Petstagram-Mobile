import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Line} from 'react-native-svg';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LoginAPI, verifyToken } from './API/LoginAPI';

import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await LoginAPI(email, password);2
    if (data.error) {
        setError(data.error)
        return
    }
    const dataVerification = await verifyToken(data.access_token);
    // console.log(dataVerification)
    if (dataVerification.status) {
        return
    }
    await AsyncStorage.setItem('token', data.access_token)
    console.log(await AsyncStorage.getItem('token'))
    props.setRender(!props.render)
    // navigation.navigate('Home')
  }


    return (
    <ScrollView>
      <View style={styles.container}>
        <Svg height="1000" width="35" style={{position:'absolute', zIndex:-1, alignSelf:'flex-start'}}>
          <Line x1="35" y1="0" x2="35" y2="1000" stroke="#FEC3B9" strokeWidth="5" />
        </Svg>
        <View style={styles.logo}>
          <Image source={logo} style={{height:100, width:100}}/>
          <Text style={styles.logoText}>Petstagram</Text>
        </View>
        <Svg height="10" width="500">
          <Line x1="0" y1="0" x2="500" y2="0" stroke="#FEC3B9" strokeWidth="5" />
        </Svg>
        <TextInput placeholder='Email' style={styles.text} onChangeText={(e)=>setEmail(e)}/>
        <TextInput placeholder='Password' style={styles.text} onChangeText={(e)=>setPassword(e)}/>
        <TouchableOpacity style={styles.button} onPress={(e) => handleLogin(e)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View>
          <View style={styles.loginContainer}>
            <Image source={facebook} style={{height:50, width:50}}/>
            <TouchableOpacity>
              <Text style={styles.loginText}>Login via Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginContainer}>
            <Image source={google} style={{height:50, width:50}}/>
            <TouchableOpacity>
              <Text style={styles.loginText}>Login via Google</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.or}>or {"\n"}.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.loginText}>Create a new account</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin:20
  },
  logo: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    justifyContent: 'space-between',
    maxHeight:100,
    marginTop: 20,
  },
  logoText: {
    fontSize:50,
    paddingVertical:6,
    fontFamily: 'Cookie_400Regular',
    alignSelf: 'center',
    height: 70
  },
  text: {
    fontSize:14,
    paddingVertical:6,
    fontFamily: 'Alice_400Regular',
    width:200,
    textAlign:'center',
    borderColor: '#624224',
    borderWidth: 1,
    marginTop: 20
  },
   button: {
     backgroundColor: '#EBD4BD',
     borderColor: '#624224',
     borderWidth: 1,
     width: 80,
     marginTop: 20
   },
   buttonText: {
     fontSize:24,
     paddingVertical:6,
     fontFamily: 'Cookie_400Regular',
     textAlign: 'center'
  },
  loginContainer: {
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop:10
  },
  loginText: {
    fontSize: 14,
    paddingVertical:6,
    fontFamily: 'Alice_400Regular',
    textAlign: 'center'
  },
  or: {
    fontSize: 30,
    paddingVertical:6,
    fontFamily: 'Cookie_400Regular',
    textAlign: 'center'
  }
});
