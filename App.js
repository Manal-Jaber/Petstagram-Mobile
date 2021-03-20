import React, {useEffect} from 'react';
import Login from './components/login/Login';

export default function App() {
// console.log(process.env.APP_MANIFEST.extra.Host)
  return (
    <Login/>
  );
}
// import React, { useState, useEffect } from 'react';

// import { Text, View, StyleSheet } from 'react-native';
// import { AppLoading } from 'expo';
// import { useFonts, Cookie_400Regular } from '@expo-google-fonts/cookie';

// export default () => {
//   let [fontsLoaded] = useFonts({
//     Cookie_400Regular,
//   });

//   let fontSize = 24;
//   let paddingVertical = 6;

//   if (!fontsLoaded) {
//     return <AppLoading/>;
//   } else {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text
//           style={{
//             fontSize,
//             paddingVertical,
//             // Note the quoting of the value for `fontFamily` here; it expects a string!
//             fontFamily: 'Cookie_400Regular',
//           }}>
//           Cookie Regular
//         </Text>
//       </View>
//     );
//   }
// };