import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './Components/Screens/HomeScreen'
import { MainContext } from './Components/Context/MainContext'
import MessageScreen from './Components/Screens/MessageScreen'

const App = () => {
  return (
    <MainContext>
      <MessageScreen></MessageScreen>
    </MainContext>

  )
}

export default App