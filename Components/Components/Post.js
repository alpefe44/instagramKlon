import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'


const { width, height } = Dimensions.get('window');

const Post = () => {
    return (
        <View style = {styles.container}>
            <View style={styles.baslik}>
                <Text>Logo</Text>
                <Text>Title</Text>
            </View>
            <View>
                <Image style={styles.image} src=''></Image>
                <View style={styles.yorumBaslik}>
                    <Icon name='heart' size={24} color={'black'}></Icon>
                    <Icon name='comment' size={24} color={'black'}></Icon>
                    <Icon name='send' size={24} color={'black'}></Icon>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding:8,
        marginTop:5
    },
    baslik: {
        flexDirection: 'row'
    },
    yorumBaslik: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    image: {
        height: height * .3,
        width: width,
        flexShrink: 0
    }

})

export default Post