import Tarefas from '../pages/tarefas/index'
import Home from '../pages/home'
import Cadastro from '../pages/login'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function Routes() {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName="cadastro">
      <Stack.Screen
        name="tarefas"
        component={Tarefas}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
      
        name='home'
        component={Home}
        options={{headerShown: false}}
       
       />
       <Stack.Screen
      
      name='cadastro'
      component={Cadastro}
      options={{headerShown: false}}
     
     />
    </Stack.Navigator>
  )
}
