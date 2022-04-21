
import React,{useState} from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../assets/css/Style' ;

function Preguntas({ navigation }) {//Luis Alejandro Paulino 2019-7391
    const data = [];
    const [acciones, setAcciones] = React.useState(
      {
  
        indexEdicion: null,
        titulo: "",
        fecha: "",
        descripcion: "",
        foto: "",
        audio: ""
      }
    );
  
    return (
  
      <View >
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>
          <br></br>
  
          <Text>Preguntas Frecuentes</Text><br></br>
  
          <br></br>
  
          <TextInput
            style={{ height: 100, width: 200, borderColor: 'black', borderWidth: 1 }}
  
            placeholderTextColor="#CBC5C5"
            value={acciones.fecha}
            onChangeText={(value) => { setAcciones(value) }}
            autoCorrect={false}
            autoCapitalize='none'
          />
  
  
          <br></br>
  
  
  
          <TouchableHighlight
  
            style={[styles.boton]}
          >
            <Text style={[styles.Textboton]}><Text style={{ color: 'white' }}>Enviar</Text></Text>
          </TouchableHighlight>
  
  
  
  
        </View>
  
  
      </View>
    );
  
  }

export default Preguntas;