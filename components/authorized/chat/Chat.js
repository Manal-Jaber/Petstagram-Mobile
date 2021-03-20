import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Chat() {
    return (
      <View style={styles.container}>
        <Text>Chat</Text>
        <StatusBar style="auto"/>
      </View>
    );
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    marginTop:10
  },
});
