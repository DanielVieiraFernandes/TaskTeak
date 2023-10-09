import React from 'react'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Routes from './routes'
export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Routes />
    </View>
  )
  
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })
  
