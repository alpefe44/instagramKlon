import { View, Text } from 'react-native'
import React from 'react'

const StoryCircle = ({ name, theme }) => {


    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ height: 60, width: 60, backgroundColor: 'white', borderRadius: 30, marginHorizontal: 3, borderWidth: 1 }}></View>
            <Text style={{ color: theme === 'dark' ? 'white' : 'black', fontSize: 12, marginTop: 5 }}>{name.length > 8 ? name.substring(0, 8) + "..." : name}</Text>
        </View>


    )
}

export default StoryCircle