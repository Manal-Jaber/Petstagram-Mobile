import React, {useEffect} from 'react';
import Login from './Login';
import Register from './Register';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function NonAuthorized({render,setRender}) {

    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" options={{ headerShown: false }} >
                {(props)=><Login {...props} render={render} setRender={setRender}/>}
            </Stack.Screen>
            <Stack.Screen name="Register" options={{ headerShown: false }}>
                {(props)=><Register {...props} render={render} setRender={setRender}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}