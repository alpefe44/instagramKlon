import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthStack from './AuthStack';
import HomeScreenStack from './HomeScreenStack';
import TabbarStack from './Tabbar/TabbarStack';


const Stack = createStackNavigator();
const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Auth' component={AuthStack}></Stack.Screen>
                <Stack.Screen name='App' component={TabbarStack}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack