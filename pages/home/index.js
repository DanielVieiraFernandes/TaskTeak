import React from 'react'
import { ImageBackground, StyleSheet, Image } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function Home() {
  const Navigation = useNavigation()

  

  React.useEffect(() => {
    const backAction = Navigation.addListener('beforeRemove', (e) => {
      // Impedir a ação de voltar para a tela inicial
      if (e.data.action.type === 'GO_BACK' && Navigation.getCurrentRoute().name === 'Home') {
        e.preventDefault()
      }
    })

    const handlePress = () => {
    Navigation.navigate('login')
    }

    setTimeout(handlePress, 2000)

    return () => {
      backAction()
    }
  }, [Navigation])

  return (
    <ImageBackground
      source={require('../img/corno.png')}
      style={styles.container}
    >
      <Animatable.View animation='zoomInUp' duration={1000}>
        <Image source={require('../img/taskteak_logo.png')} />
      </Animatable.View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContinue: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  containerButtons: {
    flex: 0.5,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
})
