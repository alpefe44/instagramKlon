import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreenStack from '../HomeScreenStack';
import KesfetStack from '../KesfetStack';
import Icon from 'react-native-vector-icons/AntDesign'
import ProfileStack from '../ProfileStack';


const Tab = createBottomTabNavigator();

const TabbarStack = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name='TabHome'
                component={HomeScreenStack}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Icon name="home" size={32}></Icon>
                        )
                    },
                    title: 'Home',
                }}
            ></Tab.Screen>
            <Tab.Screen
                name='TabKesfet'
                component={KesfetStack}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Icon name="search1" size={32}></Icon>
                        )
                    },
                    title: 'Keşfet'
                }}
            ></Tab.Screen>
            <Tab.Screen
                name='TabProfile'
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Icon name='user' size={32}></Icon>
                        )
                    },
                    title: 'Profil'
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabbarStack