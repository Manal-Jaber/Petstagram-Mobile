import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Photo from './Photo';
import Gallery from './Gallery';
import Video from './Video';

import gallery from '../../../assets/gallery.png'
import photo from '../../../assets/photo.png'
import video from '../../../assets/video.png'

const Tab = createBottomTabNavigator();

export default function Camera({render,setRender}) {

  return (
    <Tab.Navigator initialRouteName="Photo" tabBarOptions={{ activeTintColor: 'black', }}>
        <Tab.Screen 
        name="Gallery"
        component={Gallery}
        options={{
          tabBarLabel: 'Gallery',
          tabBarOptions: { showIcon: true, },
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={gallery}
            />
          ), 
        }}>
          {/* {(props)=><Home {...props} render={render} setRender={setRender}/>} */}
        </Tab.Screen>
        <Tab.Screen name="Photo" component={Photo}
        options={{
          tabBarLabel: 'Photo',
          tabBarOptions: { showIcon: true, },
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={photo}
            />
          ), 
        }}/>
        <Tab.Screen name="Video" component={Video}
        options={{
          tabBarLabel: 'Video',
          tabBarOptions: { showIcon: true, },
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={video}
            />
          ), 
        }}/>      
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width:25,
    height:25,
  },
});


// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions'
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

// import snap from '../../../assets/snap.png';

// export default function Camera() {

//   const width = Dimensions.get("window").width;
//   const height = Dimensions.get("window").height;
//     //  image Picker from camera 
//      takePicture = async () => {
//         await Permissions.askAsync(Permissions.CAMERA);
//         const { cancelled, uri } = await ImagePicker.launchCameraAsync({
//             allowsEditing: true
//         });
//         setImage( uri );
//     };
//   const [image, setImage] = useState(null)
//   return(

// <View>

// <Image source={{ uri: image }} style={{ width: width, height: height-130 }} />
//         <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

//             <TouchableOpacity
//                 onPress={takePicture}
//             >
//                  <Image
//               style={styles.icon}
//               source={gallery}
//             />
//             </TouchableOpacity>
//             <TouchableOpacity
//                 onPress={takePicture}
//             >
//                   <Image
//               style={styles.icon}
//               source={photo}
//             />
//             </TouchableOpacity>
//         </View>



// </View>)
// }
// const styles = StyleSheet.create({
//   icon: {
//     width:50,
//     height:50,
//   },
// });