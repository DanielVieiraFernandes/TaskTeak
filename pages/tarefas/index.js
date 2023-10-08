import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Modal,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Checkbox from 'expo-checkbox'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
export default function Tarefas() {
  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState([])
  const [textInput, setTextInput] = useState('')
  const [colorCheckBox, setcolorCheckBox] = useState({})

  const Item = ({ item }) => {
 
    const removerTarefa = (id) => {
      let newData = data.filter((val) => val.id !== id)
      setData(newData)
    }


    const marcarConcluida = (id) => {
      setcolorCheckBox({ ...colorCheckBox, [id]: true }) 
      setTimeout(() => {
        removerTarefa(id)
      }, 500) 
    }

   
    useEffect(() => {
     
      const timer = setTimeout(() => {
        setcolorCheckBox({})
      }, 500)

      return () => clearTimeout(timer)
    }, [colorCheckBox])

    return (
      <View style={styles.containerList}>
        <View style={styles.containList}>
          <Text>{item.text}</Text>
          <View
            style={styles.checkBoxContainer}
          >
          <View
            >
              <Checkbox
              value={item.concluido}
              onValueChange={() => marcarConcluida(item.id)}
              style={[
                styles.checkBoxArea,
                {
                backgroundColor: colorCheckBox[item.id] ? '#000' : 'transparent',
                borderRadius: 20,
                borderColor: 'black',
                padding: 5
                },
                ]}
              />
          </View>
          </View>
        </View>
      </View>
    )
  }

  const Navigation = useNavigation()

  const handlePress = () => {
    Navigation.navigate('home')
  }

  return (
    <ImageBackground
    
    source={require('../img/corno.png')}
    style={{flex:1, resizeMode: 'cover'}}
    >
      <View
       style={styles.container}>
      <View style={styles.containerHead}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageContain} source={require('../img/eu.png')}></Image>
        </View>
       <View style={styles.iconReturn}>
      <TouchableOpacity animation='zoomInUp' onPress={handlePress}> 
        <Ionicons name="return-up-back" size={34} color="white" />
        </TouchableOpacity>
       </View>
      </View>
      <View style={styles.textArea}>
          <Text style={styles.textTarefas}>Tarefas</Text>
       </View>
      <View style={styles.containerMain}>
      <FlatList
        data={data} 
        renderItem={({ item }) => <Item item={item} />} 
        keyExtractor={(item, index) => index.toString()} 
        style={{flex: 1}}
      />
      {/* MODAL */}
      <KeyboardAvoidingView
       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
       style={styles.container}
       keyboardVerticalOffset={-100} >
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal ta aberta pae')
          setModalVisible(!modalVisible)
        }}
      >
       <View style={styles.modalVisible}>
          <View style={styles.containerModal}>
          <View style={styles.headModal}>
         <Text style={styles.textModal}>Nova Tarefa</Text>
      <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)}><Text style={styles.buttonClose}><AntDesign name="closecircle" size={34} color="black" /></Text></TouchableOpacity>
      </View>
     
            <View style={styles.mainModal}>
            <TextInput placeholder='O que você está planejando?' value={textInput} onChangeText={(text) => setTextInput(text)} style={styles.inputModal}></TextInput>
            </View>
            <TouchableOpacity style={styles.TouchableOpacityButton} onPress={() => {
                  if (textInput.trim() !== '') {
                    const novaTarefa = {
                      id: Math.random().toString(),
                      text: textInput,
                      concluido: false
                    }
                    setData([...data, novaTarefa])
                    setTextInput('')
                    setModalVisible(!modalVisible)
                  }
                  
                }}><Text style={styles.textTouchableOpacity}>Criar</Text></TouchableOpacity>
          </View>
       </View>
      </Modal>
      </KeyboardAvoidingView>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.TouchableOpacityButtonTwo}><Text style={{ fontSize: 50, color: 'white', fontWeight: '100'}}>+</Text></TouchableOpacity>
      </View>
      <StatusBar hidden />
    </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerHead: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 10,
    height: 80,
    margin: 20,
  },
   iconReturn: {
    flex: 1,
    justifyContent: 'flex-start',
    height:'80%'
   },

  containerModal: {
    flex: 0.5,
    backgroundColor: '#fff', 
    borderWidth: 0.5,
    alignItems: 'center',
  },
  modalVisible: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  TouchableOpacityButton: {
    backgroundColor: '#3d41c1',
    alignItems: 'center',
    width: '50%',
    height: 50,
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10
  },
  containerButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 40,
    right: 30,
  },
  TouchableOpacityButtonTwo: {
    backgroundColor: '#5787fd',
    paddingHorizontal: 15,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContain: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  logo: {
    width: 120,
    height: 80,
  },
  perfilContain: {
    gap: 1
  },
  containList: {
    width: '90%',
    height: 90,
    borderRadius: 10,
    backgroundColor: '#caf0f8',
    elevation: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',

  },
  containerList: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  inputModal: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    height: 150,
    fontSize: 20,
    textAlignVertical: 'top',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1
  },
  buttonAdicionar: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7209B7',
  },
  headModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    margin: 10,
  },
  textModal: {
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
    flex: 1,
  },
  buttonClose: {
    alignSelf: 'flex-end', 
  },  
  mainModal: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems:  'center'
  },
  textTouchableOpacity: {
    color:'#fff',
    fontSize: 18
  },
  checkBox: {
    width: 25,
    height: 25,
    
    borderRadius: 20
  },
  checkBoxContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin:20,
  },
  textTarefas: {
    color: '#fff',
    fontSize: 30
  },
  textArea: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: 20
  },
  containerMain: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  }
})
