
import React,{useState} from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../assets/css/Style' ;

function ConsultaPrestamos({ navigation }) {//Luis Alejandro Paulino 2019-7391


    return (
  
      <View >
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}><br></br><br></br>
         
         <Text style={{backgroundColor:'green',fontSize:25}}>Resumen de Sus Prestamos </Text><br></br>
          <br></br>
  
          <Text >Numero de Cuenta: </Text><br></br>
          <Text>Numero de Prestamo: </Text><br></br>
          <Text>Cantidad total: </Text><br></br>
          <Text>Cuota mensual: </Text><br></br>
  
  
  
          <br></br>
  
  
        </View>
  
  
  
      </View>
    );
  
  }

export default ConsultaPrestamos;