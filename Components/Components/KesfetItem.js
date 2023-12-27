import { View, Text , Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');
const KesfetItem = ({ item }) => {
    return (
        <View style={{ height: 100, width: width / 3, borderWidth: .1  , backgroundColor:'gray' }}>
            <Text>{item.title}</Text>
        </View>
    )
}

export default KesfetItem