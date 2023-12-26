import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from '../../Screens/LoginPage';

const Stack = createStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LoginPage' component={LoginPage}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthStack