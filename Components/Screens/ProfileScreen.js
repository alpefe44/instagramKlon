import { View, Text, StyleSheet, TouchableOpacity, Pressable, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import ProfileHeader from '../Components/ProfileHeader'


const { width, height } = Dimensions.get('window');
const ProfileScreen = () => {

    const [screen, setScreen] = React.useState(0)

    const ScreenA = () => {
        return (
            <>
                <View style={{ height: height * .3, marginTop: 15 }}>
                    <Text style={{ textAlign: 'center' }}>Bir arkadaşınla birlikte anı yakala</Text>
                </View>
            </>
        )
    }
    const ScreenB = () => {
        return (
            <>
                <View style={{ height: height * .3, marginTop: 15 }}>
                    <Text style={{ textAlign: 'center' }}>Olduğun Fotoğraf ve Videolar</Text>
                </View>
            </>
        )
    }
    return (
        <View style={styles.container}>
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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', flex: 1, gap: 15 }}>
                    <TouchableOpacity style={{ width: 150, height: 30, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
                        <Text >Profili Düzenle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 150, height: 30, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
                        <Text >Profili Paylaş</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: 'gray', borderRadius: 15, padding: 5 }}>
                    <Icon name='adduser' size={22}></Icon>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text>Hikayelerde Öne Çıkanlar</Text>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <View style={{ width: '50%', alignItems: 'center', borderBottomWidth: 1 }}>
                        <Pressable style={{ width: '100%' }} onPress={() => setScreen(0)}>
                            <Text style={{ textAlign: 'center' }}>A</Text>
                        </Pressable>

                    </View>
                    <View style={{ width: '50%', alignItems: 'center', borderBottomWidth: 1 }}>
                        <Pressable style={{ width: '100%' }} onPress={() => setScreen(1)}>
                            <Text style={{ textAlign: 'center' }}>B</Text>
                        </Pressable>
                    </View>
                </View>
            </View >

            {
                screen === 0 ? <ScreenA></ScreenA> : <ScreenB></ScreenB>
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    navbar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
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