import Tarefas from '../pages/tarefas/index'
import Home from '../pages/home'
import Login from '../pages/login'
import Cadastro from '../pages/cadastro'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

export default function Routes() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
      
        name='Home'
        component={Home}
        options={{headerShown: false, headerLeft: null, headerRight: null}}
       
       />
       <Stack.Screen
        name="Tarefas"
        component={Tarefas}
        options={{ headerShown: false }} 
      />
       <Stack.Screen
        name='Login'
        component={Login}
        options={{headerShown: false}}
     />
     <Stack.Screen
        name='Cadastro'
        component={Cadastro}
        options={{headerShown: false}}
     />
    </Stack.Navigator>
    </NavigationContainer>
  )
}
