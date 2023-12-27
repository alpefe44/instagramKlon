import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import ProfileHeader from '../Components/ProfileHeader'

const ProfileScreen = () => {
    return (
        <View>
            <View style={styles.navbar}>
                <View style={styles.navbarLeft}>
                    <Icon name="lock" size={24} color="black" />
                    <Text style={styles.navbarText}>akpinaralp</Text>
                    <Icon name="caretdown" size={12} color="black" />
                </View>
                <View style={styles.navbarRight}>
                    <Icon name="plussquareo" size={24} color="black" />
                    <Icon name="bars" size={24} color="black" />
                </View>
            </View>
            <ProfileHeader></ProfileHeader>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'

    },
    navbarLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5

    },
    navbarRight: {
        flexDirection: 'row',
        gap: 8
    },
    navbarText: {
        color: 'black',
        fontWeight: 'bold'
    }
})

export default ProfileScreen