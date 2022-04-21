
import React,{useState} from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../assets/css/Style' ;

function ContactoMapas({ navigation }) {//Luis Alejandro Paulino 2019-7391
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
  
          <Text>Comunicate con nosotros</Text><br></br>
  
  
          <Text>Nuestros numeros : 456325465</Text><br></br>
  
          <Text>Nuestras sucursales </Text><br></br>
  
          <Text>Nuestro servicios: </Text><br></br>
  
  
  
  
  
        </View>
  
  
      </View>
    );
  
  }

export default ContactoMapas;