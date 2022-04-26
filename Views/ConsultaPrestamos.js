
import React,{useState} from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../assets/css/Style' ;

function ConsultaPrestamos({ navigation }) {//Luis Alejandro Paulino 2019-7391


    return (
  
      <View >
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>
         
         <Text style={{backgroundColor:'green',fontSize:25}}>Resumen de Sus Prestamos </Text>
          
  
          <Text >Numero de Cuenta: </Text>
          <Text>Numero de Prestamo: </Text>
          <Text>Cantidad total: </Text>
          <Text>Cuota mensual: </Text>
  
  
  
          
  
  
        </View>
  
  
  
      </View>
    );
  
  }

export default ConsultaPrestamos;