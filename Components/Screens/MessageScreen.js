import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import data from '../Data'
import StoryCircle from '../Components/StoryCircle'
import Icon from 'react-native-vector-icons/AntDesign'
import MessageBox from '../Components/MessageBox'


const MessageScreen = ({ navigation }) => {

    const [showSearchContent, setShowSearchContent] = React.useState(true);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Alp',
            headerTitleAlign: 'center'
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput onFocus={() => setShowSearchContent(false)} onBlur={() => setShowSearchContent(true)} style={styles.textInput}></TextInput>
                {
                    showSearchContent &&
                    <View style={styles.inTextInput}>
                        <Icon name='search1' size={24} color={'black'}></Icon>
                        <Text>Ara</Text>
                    </View>
                }

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
        backgroundColor: '#fff',
        position: 'relative',
        marginVertical: 10,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    inTextInput: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        left: 25,
        top: 1,
        bottom: 1
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