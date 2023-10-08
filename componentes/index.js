import { Text, View, Modal, Alert, TouchableOpacity, StyleSheet, Image, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Index() {

  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState([])
  const [textInput, setTextInput] = useState('')

  const Item = ({ item }) => {
    return (
 
       <View style={styles.containerList}>
        <View style={styles.containList}> 
        <View style={styles.checkBoxArea}>
          
        </View>
          <Text>{item}</Text>
          </View> 
        </View>
     
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHead}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageContain} source={require('./img/dante-devil-may-cry-capcom-video-games-devil-may-cry-5-hd-wallpaper-preview.jpg')}></Image>
        </View>
        <View style={styles.perfilContain}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Dante</Text>
          <Text style={{ fontWeight: '400', fontSize: 12, color: '#fff' }}>dantesparda@gmail</Text>
        </View>
        <View style={styles.headerTwo}>
        <Image style={styles.logo}  source={require('./img/taskteak_logo.png')}></Image>
        </View>
      </View>
       <FlatList
        data={data} 
        renderItem={({ item }) => <Item item={item} />} 
        keyExtractor={(item, index) => index.toString()} 
      />
      {/* MODAL */}
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
        <View style={{ flex: 1, alignItems: 'center'}}>
          <Text style={styles.textModal}>Nova Tarefa</Text>
        </View>
        <TouchableOpacity style={styles.TouchableOpacityButtonModal} onPress={() => setModalVisible(!modalVisible)}><Text style={styles.buttonClose}>X</Text></TouchableOpacity>
      </View>
            <View style={styles.mainModal}>
            <TextInput placeholder='O que você está planejando?' value={textInput} onChangeText={(text) => setTextInput(text)} style={styles.inputModal}></TextInput>
            </View>
            <TouchableOpacity style={styles.TouchableOpacityButton} onPress={() => {
                  if (textInput.trim() !== '') {
                    setData([...data, textInput])
                    setTextInput('')
                    setModalVisible(!modalVisible);
                  }
                }}><Text style={styles.textTouchableOpacity}>Criar</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.TouchableOpacityButtonTwo}><Text style={{ fontSize: 50, color: 'white', fontWeight: '100'}}>+</Text></TouchableOpacity>
      </View>
      <StatusBar hidden />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerHead: {
    backgroundColor: '#5787fd',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30
  },
   headerTwo: {
    flex: 1,
    alignItems: 'flex-end',
    margin: 20
  },  

  containerModal: {
    flex: 0.5,
    backgroundColor: '#fff', 
    borderWidth: 0.5,
    alignItems: 'center',
  },
  modalVisible: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  textModal: {
    color: '#000',
    fontSize: 25,
  },
  TouchableOpacityButton: {
    backgroundColor: '#3d41c1',
    alignItems: 'center',
    width: '100%',
    height: 50,
    justifyContent: 'center'
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
    width: 60,
    height: 60,
    marginLeft: 15,
    borderRadius: 40
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
    backgroundColor: '#e9e9e9',
    elevation: 10,
    padding: 10
  },
  containerList: {
    alignItems: 'center',
    padding: 25
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
    justifyContent: 'space-between',
    margin: 10
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
  buttonClose:{
    fontSize: 25
  }
})
