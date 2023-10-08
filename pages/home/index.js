import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
export default function Home() {

  const Navigation = useNavigation()

  const handlePress = () => {
    Navigation.navigate('tarefas')
  }
  return (
    <ImageBackground
    source={require('../img/corno.png')}
    style={styles.container}
    >
     <Animatable.View animation='zoomInUp' 
     duration={1000}>
     <Image
        source={require('../img/taskteak_logo.png')}
      />
      <View style={styles.containerButtons}>
        <TouchableOpacity onPress={handlePress} style={styles.buttonContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
     </Animatable.View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContinue: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 10
  },
  containerButtons: {
    flex: 0.5,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
  }

})