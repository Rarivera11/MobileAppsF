
import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../assets/css/Style';

function Sugerencias({ navigation }) {//Luis Alejandro Paulino 2019-7391
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

      <Text style={{ backgroundColor: 'green', fontSize: 25 }}>Escribe tus sigerencias aqui </Text><br></br>

      <br></br>

      <TextInput
        style={{ height: 100, width: 200, borderColor: 'black', borderBottomEndRadius: 10, borderWidth: 20, borderRadius: 10, borderWidth: 1, borderWidth: 1 }}

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
        <Text style={[styles.Textboton]}><Text style={{ color: 'white' }}>Enviar</Text></Text>
      </TouchableHighlight>




    </View>




  );

}

export default Sugerencias;