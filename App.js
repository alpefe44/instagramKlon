import React from 'react'
import { MainContext } from './Components/Context/MainContext'
import RootStack from './Components/Components/route/RootStack'
import { User } from './Components/Context/UserContext'

const App = () => {
  return (
    <User>
      <MainContext>
        <RootStack></RootStack>
      </MainContext>
    </User>
  )
}

export default App