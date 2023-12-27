import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.image}></View>
            <View style={styles.secondContainer}>
                <View>
                    <Text style={styles.secondContainerText}>0</Text>
                    <Text style={styles.secondContainerText}>Gönderi</Text>
                </View>
                <View>
                    <Text style={styles.secondContainerText}>0</Text>
                    <Text style={styles.secondContainerText}>Gönderi</Text>
                </View>
                <View>
                    <Text style={styles.secondContainerText}>0</Text>
                    <Text style={styles.secondContainerText}>Gönderi</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: 'black',
    },
    secondContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25
    },
    secondContainerText: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
export default ProfileHeader