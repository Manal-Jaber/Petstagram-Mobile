import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function EditProfile(props) {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Edit Profile</Text>
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