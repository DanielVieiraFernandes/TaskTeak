import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
export default function Login() {

  const Navigator = useNavigation()

  const handlePress = () => {
    Navigator.navigate('tarefas')
  }

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
      <ScrollView 
       keyboardShouldPersistTaps="always"
        style={styles.containerLogin}>
        <View style={styles.containerTexts}>
          <Text style={styles.textLogin}>Log in</Text> 
          <Text style={styles.textLoginMini}>Faça o login para continuar</Text>
        </View>
       <View style={styles.containerInput}>
        <View style={styles.contentMain}>
        <Text style={styles.textInputText}>Email</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.textInputText}>Senha</Text>
        <TextInput secureTextEntry={true} style={styles.textInput}></TextInput>
        </View>
        </View>
       <View style={styles.containerButton}>
         <TouchableOpacity style={styles.buttonLogin} onPress={handlePress}>
          <Text style={styles.textTouch}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCadastro}>
          <Text style={styles.textTouchTwo}>Criar Conta</Text>
          </TouchableOpacity>
         </View>
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
    width: 250,
    height: 250,
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
