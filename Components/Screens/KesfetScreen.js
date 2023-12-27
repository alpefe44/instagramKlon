import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import KesfetItem from '../Components/KesfetItem';
import CustomTextInput from '../Components/CustomTextInput';


const data = [
  { id: '1', title: 'Öğe 1' },
  { id: '2', title: 'Öğe 2' },
  { id: '3', title: 'Öğe 3' },
  { id: '4', title: 'Öğe 4' }
];

const KesfetScreen = () => {
  return (
    <>
      <CustomTextInput></CustomTextInput>
      <FlatList
        data={data}
        renderItem={({ item }) => <KesfetItem item={item}></KesfetItem>}
        numColumns={3}
      />
    </>
  )
}





export default KesfetScreen