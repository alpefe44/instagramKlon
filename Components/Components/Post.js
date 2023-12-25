import { View, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';



const { width, height } = Dimensions.get('window');

const Post = () => {

    const scaledValue = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ scale: withTiming(scaledValue.value, 0) }]
    }))


    const doubleClick = () => {
        scaledValue.value = 1;
        setTimeout(() => {
            scaledValue.value = 0;
        }, 2000);
    }

    return (
        <View style={styles.container}>
            <View style={styles.baslik}>
                <Text>Logo</Text>
                <Text>Title</Text>
            </View>
            <View>
                <View>
                    <Pressable onPress={() => doubleClick()}>
                        <Image style={styles.image} source={{ uri: 'https://artdogistanbul.com/wp-content/uploads/2023/08/IMG_20211225_151242.jpg' }}></Image>
                    </Pressable>
                    <Animated.View style={[{ position: 'absolute', alignSelf: 'center', top: height * .3 / 3 }, animatedStyles]}>
                        <Icon name='heart' size={80} color={'red'}></Icon>
                    </Animated.View>
                </View>
                <View style={styles.yorumBaslik}>
                    <Icon name='hearto' size={24} color={'black'}></Icon>
                    <Icon name="message1" size={24} color="black" />
                    <Icon name="rocket1" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
    baslik: {
        flexDirection: 'row',
        marginLeft:5,
        marginVertical:5
    },
    yorumBaslik: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginLeft:5,
        marginVertical:5
    },
    image: {
        height: height * .3,
        width: width,
        flexShrink: 0
    }

})

export default Post