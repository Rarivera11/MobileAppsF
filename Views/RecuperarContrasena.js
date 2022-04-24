
import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../assets/css/Style';

function RecuperarContrasena({ navigation }) {//Luis Alejandro Paulino 2019-7391

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
      
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}><br></br><br></br>
        Ingrese los Siguientes campos
        <br></br><br></br>

        <TextInput
          style={{ borderBottomEndRadius: 10, backgroundColor: '#F0EEEE', borderWidth: 20, borderRadius: 10, borderWidth: 1, ...styles.input }}
          placeholder='Cedula'
          placeholderTextColor="#CBC5C5"
          value={acciones.titulo}
          onChangeText={(value) => { setAcciones(value) }}
          autoCorrect={false}
          autoCapitalize='none'
        /><br></br>

        <TextInput
          style={{ borderBottomEndRadius: 10, backgroundColor: '#F0EEEE', borderWidth: 20, borderRadius: 10, borderWidth: 1, ...styles.input }}
          placeholder='Contraseña'
          placeholderTextColor="#CBC5C5"
          value={acciones.fecha}
          onChangeText={(value) => { setAcciones(value) }}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <br></br>



        <TouchableHighlight

          style={{ borderBottomEndRadius: 10, backgroundColor: 'green', borderWidth: 20, borderRadius: 10, borderWidth: 1, ...styles.input }}

        >
          <Text style={[styles.Textboton]}><Text style={{ color: 'white' }}>Recuperar</Text></Text>
        </TouchableHighlight>




      </View>

      {/* <View>
        {acciones.map((e) =>{
          <Text>{acciones.titulo}</Text>
        })}
        </View> */}


    </View>
  );

}

export default RecuperarContrasena;