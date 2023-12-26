import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import KesfetScreen from '../../Screens/KesfetScreen';


const Stack = createStackNavigator();
const KesfetStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='KesfetScreen' component={KesfetScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default KesfetStack