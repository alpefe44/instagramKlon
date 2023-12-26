import React from 'react'
import { MainContext } from './Components/Context/MainContext'
import RootStack from './Components/Components/route/RootStack'

const App = () => {
  return (
    <MainContext>
      <RootStack></RootStack>
    </MainContext>
  )
}

export default App