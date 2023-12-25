import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const MessageBox = () => {
    return (
        <View style={styles.messageContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <View style={styles.profile}></View>
                <View>
                    <Text>Alp</Text>
                    <View>
                        <Text>Yeni Mesaj * 10d</Text>
                    </View>
                </View>
            </View>
            <View>
                <Icon name='search1' size={24} color={'black'}></Icon>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 10
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 40,
        backgroundColor: 'black'
    },
})

export default MessageBox