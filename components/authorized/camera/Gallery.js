import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, Text, Platform, Dimensions, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

import cancel from '../../../assets/cancel.png';
import tick from '../../../assets/tick.png';

export default function Gallery() {


  const navigation = useNavigation();

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {!image &&
      <TouchableOpacity onPress={pickImage} >
        <Text>Open Gallery</Text>
      </TouchableOpacity>
      }
      {image && 
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{marginTop:20, marginStart:10, marginEnd:10, flexDirection:'row',width:width-30, justifyContent:'space-between'}}>
          <TouchableOpacity onPress={()=>setImage(null)}>
            <Image style={styles.icon} source={cancel}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Image style={styles.icon} source={tick}/>
          </TouchableOpacity>
        </View>
        <Image source={{ uri: image }} style={{ width: width, height: height-155 }} />
        
      </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width:40,
    height:40,
  },
});