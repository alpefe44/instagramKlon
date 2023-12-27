import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { UserContext } from '../Context/UserContext'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const ProfileHeader = () => {

    const { selectedImage, setSelectedImage } = useContext(UserContext)
    const pickImageFromGallery = async() => {
        await launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
            },
            (response) => {
                if (!response.didCancel) {
                    setSelectedImage(response.assets[0].uri);
                    console.log(selectedImage)
                }
            }
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                {
                    !selectedImage ? (
                        <Pressable style={styles.inImage} onPress={() => pickImageFromGallery()}>
                            <View>
                                <Icon name="camera" size={40}></Icon>
                            </View>
                        </Pressable>) : <Image style = {{width:60 , height:60 , resizeMode:'cover' , borderRadius:40}} source={{ uri: selectedImage }}></Image>
                }

            </View>
            <View style={styles.secondContainer}>
                <View>
                    <Text style={styles.secondContainerText}>0</Text>
                    <Text style={styles.secondContainerText}>Gönderi</Text>
                </View>
                <View>
                    <Text style={styles.secondContainerText}>0</Text>
                    <Text style={styles.secondContainerText}>Takipçi</Text>
                </View>
                <View>
                    <Text style={styles.secondContainerText}>0</Text>
                    <Text style={styles.secondContainerText}>Takip</Text>
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
        backgroundColor: 'gray',
        position: 'relative'
    },
    secondContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    secondContainerText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inImage: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%'
    }
})
export default ProfileHeader