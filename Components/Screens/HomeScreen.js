import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { MyContext } from '../Context/MainContext';
import data from '../Data/index'
import StoryCircle from '../Components/StoryCircle';
import Post from '../Components/Post';

const HomeScreen = () => {

    const { theme, setTheme } = useContext(MyContext);

    return (
        <View style={[styles.main, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <View style={styles.navbar}>
                <Pressable onPress={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                }}>
                    <Text style={[styles.title, { color: theme === 'dark' ? 'white' : 'black' }]}>Instagram</Text>
                </Pressable>
                <View style={styles.navRight}>
                    <Icon name={theme === 'light' ? 'heart' : 'hearto'} size={24} color={theme === 'dark' ? 'white' : 'black'}></Icon>
                    <Icon name='message1' size={24} color={theme === 'dark' ? 'white' : 'black'}></Icon>
                </View>
            </View>

            <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 2, alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ height: 50, width: 50, backgroundColor: 'white', borderRadius: 25, position: 'relative', borderWidth: 1 }}>
                        <View style={{ position: 'absolute', right: 0, bottom: 0, height: 20, width: 20, backgroundColor: 'lightblue', borderRadius: 25 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>+</Text>
                        </View>
                    </View>
                    <Text style={{ color: theme === 'dark' ? 'white' : 'black' }}>Ben</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        data.map((item, index) => {
                            return <StoryCircle name={item.name} theme={theme}></StoryCircle>
                        })
                    }
                </ScrollView>
            </View>

            <Post></Post>
        </View >
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        alignItems: 'center'
    },
    navRight: {
        flexDirection: 'row',
        gap: 15
    },
    defaultText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },

})

export default HomeScreen