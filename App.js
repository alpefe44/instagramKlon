import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './Components/Screens/HomeScreen'
import { MainContext } from './Components/Context/MainContext'

const App = () => {
  return (
    <MainContext>
      <HomeScreen></HomeScreen>
    </MainContext>

  )
}

export default App