
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
  
      <View style={{ flex: 1, backgroundColor: '#DBDBDB', alignItems: 'center', ...styles.container }}>
      <br></br>

      <Text style={{ backgroundColor: 'green', fontSize: 25 }}>Respuestas de Ayuda </Text><br></br>

      <br></br>

      <Text style={{ Color: 'black', fontSize: 25 }}>Cantidad de sucursales:  </Text><br></br>

      <Text style={{ Color: 'black', fontSize: 25 }}>Ubicacion de sucursales: </Text><br></br>

      <Text style={{ Color: 'black', fontSize: 25 }}>Como contactarnos: </Text><br></br>

      <Text style={{ Color: 'black', fontSize: 25 }}>Nuestros productos: </Text><br></br>



      <br></br>





    </View>


    );
  
  }

export default Preguntas;