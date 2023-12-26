import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MessageScreen from '../../Screens/MessageScreen';
import MessageDetail from '../../Screens/MessageDetail';


const Stack = createStackNavigator();

const MessageScreenStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='MessageScreen' component={MessageScreen}></Stack.Screen>
            <Stack.Screen name='MessageDetail' component={MessageDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default MessageScreenStack