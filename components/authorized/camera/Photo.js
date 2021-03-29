import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import flip from '../../../assets/flip.png';
import snap from '../../../assets/snap.png';

export default function Photo() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const snapImage = async () => {
    let { uri } = await Camera.takePictureAsync();
  }
//   const asset = await MediaLibrary.createAssetAsync(uri);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
                <Image source={flip} style={styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>snapImage}>
            <Image style={{height:80, width:80, alignSelf:'center'}} source={snap}/>
          </TouchableOpacity>
        <Image source={{ uri: image }} style={{ width: width, height: height-155 }} />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    // justifyContent: 'space-around',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  icon: {
    width:40,
    height:40,
  },
});