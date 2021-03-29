
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import cancel from '../../../assets/cancel.png';
import tick from '../../../assets/tick.png';


export default function Photo() {

    const navigation = useNavigation();

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
    //  image Picker from camera 
     takePicture = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        const { cancelled, uri } = await ImagePicker.launchCameraAsync({
            allowsEditing: true
        });
        setImage( uri );
    };
  const [image, setImage] = useState(null)
  return(

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {!image &&
        <TouchableOpacity onPress={takePicture}>
            <Text>Take Photo</Text>
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
</View>)
}
const styles = StyleSheet.create({
    icon: {
      width:40,
      height:40,
    },
  });