import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import data from '../Data'
import StoryCircle from '../Components/StoryCircle'
import Icon from 'react-native-vector-icons/AntDesign'
import MessageBox from '../Components/MessageBox'


const MessageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textInput}>
                <TextInput></TextInput>
                <View style={styles.inTextInput}>
                    <Icon name='search1' size={24} color={'black'}></Icon>
                    <Text>Ara</Text>
                </View>
            </View>

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
    textInput: {
        borderWidth: .5,
        borderRadius: 18,
        height: 40,
        marginHorizontal: 15,
        backgroundColor: 'gray',
        position: 'relative',
        marginVertical: 10,
        justifyContent: 'center'
    },
    inTextInput: {
        position: 'absolute',
        left: 10,
        flexDirection: 'row',
        alignItems: 'center'
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