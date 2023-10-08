import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <ImageBackground
      source={require('../img/corno.png')}
      style={styles.container}
    >
      <View style={styles.containerImage}>
        <Image
          source={require('../img/taskteak_logo.png')}
          style={styles.imageTask}
        />
      </View>
      <View style={styles.containerLogin}>
        <View style={styles.containerTexts}>
          <Text style={styles.textLogin}>Log in</Text> 
          <Text style={styles.textLoginMini}>Faça o login para continuar</Text>
        </View>
         
         
        <View style={styles.containerInput}>
        <Text style={styles.textInputText}>Email</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.textInputText}>Senha</Text>
        <TextInput style={styles.textInput}></TextInput>
        </View>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerLogin: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    alignItems: 'center'
  },
  imageTask: {
    width: 250,
    height: 250,
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerTexts: {
    flexDirection: 'row', 
    margin: 30,
    gap: 10,
  },
  textLogin: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold'
  },
  textLoginMini: {
    fontSize: 16,
    color: '#000'
  },
  containerInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 60,
    backgroundColor: '#e3e3e3',
    borderRadius: 10
  }

})
