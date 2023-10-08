import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Routes from './routes'
export default function App() {

  return (
    <NavigationContainer>
    <View style={styles.container}>
      <StatusBar hidden />
      <Routes />
    </View>
  </NavigationContainer>
  )
  
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })
  
