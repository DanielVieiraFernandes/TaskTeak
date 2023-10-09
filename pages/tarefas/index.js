import React, { useState } from 'react'
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
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Checkbox from 'expo-checkbox'
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
export default function Tarefas() {
  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState([])
  const [textInput, setTextInput] = useState('')

  const Item = ({ item }) => {
    const toggleCheckbox = () => {
      const newData = data.map((task) =>
        task.id === item.id ? { ...task, selected: !task.selected } : task
      )
      setData(newData)
    }

    const removerTarefa = (id) => {
      let newData = data.filter((val) => val.id !== id);
      setData(newData)
    }
    return (
      <View style={styles.containerList}>
       <Animatable.View style={styles.delIcon}><TouchableOpacity onPress={() => removerTarefa(item.id)}><MaterialIcons name="delete" size={34} color="black" /></TouchableOpacity></Animatable.View>
        <View style={styles.containList}>
          <View style={styles.contentList}>
            <View style={styles.textContain}>
              <Text>{item.text}</Text>
            </View>
            <View style={styles.checkBoxContainer}>
              <View style={styles.checkBoxView}>
                <Checkbox
                  value={item.selected}
                  onValueChange={toggleCheckbox}
                  color={item.id ? '#0028ff' : undefined}
                  style={styles.checkBox}
                />
              </View>
            </View>
          </View>
        </View>
        
      </View>
    )
  }

  const Navigation = useNavigation()

  const handlePress = () => {
    Navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/background.png')}
        style={styles.imageBackground}
      >
        <View style={styles.containerHead}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContain}
              source={require('../img/avatar-do-usuario.png')}
            />
          </View>
          <View style={styles.iconReturn}>
            <TouchableOpacity animation='zoomInUp' onPress={handlePress}>
              <Ionicons name='return-up-back' size={34} color='white' />
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
            keyExtractor={(item) => item.id}
            style={styles.flatList}
          />
          {/* MODAL */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}
            keyboardVerticalOffset={-100}
          >
            <Modal
              animationType='slide'
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal ta aberta pae')
                setModalVisible(!modalVisible)
              }}
            >
              <ScrollView>
                <View style={styles.modalVisible}>
                  <View style={styles.containerModal}>
                    <View style={styles.headModal}>
                      <Text style={styles.textModal}>Nova Tarefa</Text>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.buttonClose}>
                          <AntDesign
                            name='closecircle'
                            size={34}
                            color='black'
                          />
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.mainModal}>
                      <TextInput
                        placeholder='O que você está planejando?'
                        value={textInput}
                        onChangeText={(text) => setTextInput(text)}
                        style={styles.inputModal}
                      ></TextInput>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        if (textInput.trim() !== '') {
                          const novaTarefa = {
                            id: Date.now().toString(),
                            text: textInput,
                            selected: false,
                          }
                          setData((prevData) => [...prevData, novaTarefa])
                          setTextInput('')
                          setModalVisible(!modalVisible)
                        }
                      }}
                      style={styles.TouchableOpacityButton}
                    >
                      <Text style={styles.textTouchableOpacity}>Criar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </Modal>
          </KeyboardAvoidingView>
          <View style={styles.containerButton}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.TouchableOpacityButtonTwo}
            >
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
          </View>
          <StatusBar hidden />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
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
    height: '80%',
  },
  containerModal: {
    flex: 0.5,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    alignItems: 'center',
    gap: 30,
  },
  modalVisible: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  TouchableOpacityButton: {
    backgroundColor: '#3d41c1',
    alignItems: 'center',
    width: '50%',
    height: 50,
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  containerButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 40,
    right: 30,
  },
  TouchableOpacityButtonTwo: {
    backgroundColor: '#5787fd',
    paddingHorizontal: 20,
    borderRadius: 10000,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    gap: 1,
  },
  containList: {
    width: '100%',
    height: 90,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2
  },
  containerList: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    overflow: 'hidden',
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
    borderWidth: 1,
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
    alignItems: 'center',
  },
  textTouchableOpacity: {
    color: '#fff',
    fontSize: 18,
  },
  checkBox: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },
  checkBoxContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: 20,
  },
  textTarefas: {
    color: '#fff',
    fontSize: 30,
  },
  textArea: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: 30,
  },
  containerMain: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  textContain: {
    width: '70%',
    margin: 10,
  },
  checkBoxView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    flexGrow: 1, // Isso permite que a FlatList cresça para preencher o espaço restante
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  plusText: {
    fontSize: 50,
    color: 'white',
    fontWeight: '100',
  },
  delIcon: {
    width: '100%',
    margin: 10
  }
})
