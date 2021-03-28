import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function AddProfile(props) {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Add Profile</Text>
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
    marginTop: 10,
  },
});