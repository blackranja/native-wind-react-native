import React from 'react';

import { NativeScreenNavigationContainer, NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';  
import HomeScreen from '../screens/HomeScreen';
//import { App } from 'expo-router/_app';
const Stack=createNativeStackNavigator();
const AppNavigator=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;