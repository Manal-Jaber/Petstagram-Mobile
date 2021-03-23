import React, {useEffect} from 'react';
import Login from './Login';
import Register from './Register';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../authorized/home/Home';

const Stack = createStackNavigator();

export default function NonAuthorized(props) {
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" options={{ headerShown: false }}>
                {()=><Login render={props.render} setRender={props.setRender}/>}
            </Stack.Screen>
            <Stack.Screen name="Register" options={{ headerShown: false }}>
            {()=><Register render={props.render} setRender={props.setRender}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}