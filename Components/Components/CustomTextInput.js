import { View, Text , StyleSheet , TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import React from 'react'

const CustomTextInput = () => {

    const [showSearchContent, setShowSearchContent] = React.useState(true);

    return (
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
    )
}

const styles = StyleSheet.create({
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
})

export default CustomTextInput