import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading } from 'expo';
import {
    useFonts,
    Cookie_400Regular,
  } from '@expo-google-fonts/dev';

export default function Login() {
    let [fontsLoaded] = useFonts({
        Cookie_400Regular,
      });
    
    if (!fontsLoaded) {
    // return <AppLoading />;
    return <Text>App Loading</Text>;

    } else {
    return (
        <View style={styles.container}>
        <Text style={styles.logo}>Petstagram</Text>
        <StatusBar style="auto" />
        </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
      fontFamily: 'Cookie_400Regular',
      fontSize: 50,
      fontStyle: 'italic'
  }
});
