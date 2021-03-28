import React, {useEffect} from 'react';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';
import AddProfile from './AddProfile';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Profile({render,setRender}) {

    return(
        <Stack.Navigator initialRouteName="ViewProfile">
            <Stack.Screen name="ViewProfile" options={{ headerShown: false }} >
                {(props)=><ViewProfile {...props} render={render} setRender={setRender}/>}
            </Stack.Screen>
            <Stack.Screen name="EditProfile" >
                {(props)=><EditProfile {...props} render={render} setRender={setRender}/>}
            </Stack.Screen>
            <Stack.Screen name="AddProfile" >
                {(props)=><AddProfile {...props} render={render} setRender={setRender}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}