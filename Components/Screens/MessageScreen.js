import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import data from '../Data'
import StoryCircle from '../Components/StoryCircle'

import MessageBox from '../Components/MessageBox'
import CustomTextInput from '../Components/CustomTextInput'


const MessageScreen = ({ navigation }) => {



    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Alp',
            headerTitleAlign: 'center'
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <CustomTextInput></CustomTextInput>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        data.map((item, index) => {
                            return <StoryCircle name={item.name} ></StoryCircle>
                        })
                    }
                </ScrollView>
            </View>

            <View style={styles.secondContainer}>
                <View style={styles.secondContainerTitle}>
                    <Text style={{ color: 'black' }}>Mesajlar</Text>
                    <Text>İstekler</Text>
                </View>
            </View>

            <MessageBox></MessageBox>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        padding: 5
    },
    secondContainer: {
        marginTop: 15
    },
    secondContainerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5
    },


})

export default MessageScreen