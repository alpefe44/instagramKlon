import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../Screens/HomeScreen';
import MessageScreenStack from './MessageScreenStack';
import MessageScreen from '../../Screens/MessageScreen';
import KesfetStack from './KesfetStack';


const Stack = createStackNavigator();

const HomeScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='MessageScreen' component={MessageScreenStack}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default HomeScreenStack