
import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../assets/css/Style';

function RecuperarContrasena({ navigation }) {

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
        <Text>Ingrese los Siguientes campos</Text>
        

        <TextInput
          style={{ borderBottomEndRadius: 10, backgroundColor: '#F0EEEE', borderWidth: 20, borderRadius: 10, borderWidth: 1, ...styles.input }}
          placeholder='Cedula'
          placeholderTextColor="#CBC5C5"
          value={acciones.titulo}
          onChangeText={(value) => { setAcciones(value) }}
          autoCorrect={false}
          autoCapitalize='none'
        />

        <TextInput
          style={{ borderBottomEndRadius: 10, backgroundColor: '#F0EEEE', borderWidth: 20, borderRadius: 10, borderWidth: 1, ...styles.input }}
          placeholder='Contraseña'
          placeholderTextColor="#CBC5C5"
          value={acciones.fecha}
          onChangeText={(value) => { setAcciones(value) }}
          autoCorrect={false}
          autoCapitalize='none'
        />
        



        <TouchableHighlight

          style={{ borderBottomEndRadius: 10, backgroundColor: 'green', borderWidth: 20, borderRadius: 10, borderWidth: 1, ...styles.input }}

        >
          <Text style={[styles.Textboton]}><Text style={{ color: 'white' }}>Recuperar</Text></Text>
        </TouchableHighlight>




      </View>



    </View>
  );

}

export default RecuperarContrasena;