import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
export default function Cadastro() {

  const [inputPassword, setPassword] = useState('')
  const [inputEmail, setEmail] = useState('')

  const Navigator = useNavigation()

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
  }
  const handlePress = () => {
    if (inputEmail === '' || inputPassword.length < 6) {
      Alert.alert('Erro', 'Preencha o email e digite uma senha com pelo menos 6 caracteres.');
    } else if (!validateEmail(inputEmail)) {
      Alert.alert('Erro', 'Digite um email válido.');
    } else {
      Navigator.navigate('Tarefas');
    }
  }

  return (
    <ImageBackground
      source={require('../img/background.png')}
      style={styles.container}
    >
      <Animatable.View animation='zoomIn' style={styles.containerImage}>
        <Image
          source={require('../img/taskteak_logo.png')}
          style={styles.imageTask}
        />
      </Animatable.View>
      <ScrollView 
       keyboardShouldPersistTaps="always"
       style={styles.containerLogin}
       >
       <Animatable.View animation='slideInUp' >
       <View style={styles.containerTexts}>
          <Text style={styles.textLogin}>Cadastro</Text>
          <Text style={styles.textLoginMini}>É sua primeira vez? faça o cadastro!</Text>
        </View>
       <View style={styles.containerInput}>
        <View style={styles.contentMain}>
        <Text style={styles.textInputText}>Email</Text>
        <TextInput
          value={inputEmail}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}></TextInput>
        <Text style={styles.textInputText}>Senha</Text>
        <TextInput secureTextEntry={true} value={inputPassword}
          onChangeText={(text) => setPassword(text)} style={styles.textInput}></TextInput>
        </View>
        </View>
       <View style={styles.containerButton}>
         <TouchableOpacity style={styles.buttonLogin} onPress={handlePress}>
          <Text style={styles.textTouch}>Criar Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCadastro} onPress={() => {
            Navigator.navigate('Login')
          }}>
          <Text style={styles.textTouchTwo}>Login</Text>
          </TouchableOpacity>
         </View>
       </Animatable.View>
      </ScrollView>
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
    
  },
  imageTask: {
    width: '50%',
    height: 200,
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerTexts: {
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

  },
  textInput: {
    width: '100%',
    height: 60,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 0.2,
    padding: 20,
    fontSize: 16
  },
  containerButton: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    gap: 25,
    marginVertical: 30
  },
  textInputText: {
    fontSize: 15,
    alignSelf: 'flex-start'
  },
  contentMain: {
    flex: 1,
    marginHorizontal: 30,
    gap: 20
  },
  buttonLogin: {
    width:'100%' ,
    backgroundColor: '#5787fd',
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCadastro: {
    width:'100%' ,
    borderWidth: 1,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTouch: {
    color: "#fff",
    fontSize: 16
  },
  textTouchTwo: {
    color: "#000",
    fontSize: 16
  }

})
