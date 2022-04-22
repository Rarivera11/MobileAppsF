
import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


import MapView from 'react-native-maps';

import styles from '../assets/css/Style';

function ContactoMapas({ navigation }) {//Luis Alejandro Paulino 2019-7391


  return (


    <View style={{ flex: 1, backgroundColor: '#DBDBDB', alignItems: 'center', justifyContent: 'center' }}>
      <br></br>

      <Text style={{backgroundColor:'#DBDBDB',fontSize:18}}>Comunicate con nosotros</Text><br></br>


      <Text style={{backgroundColor:'#DBDBDB',fontSize:18}}>Nuestros numeros : 456325465</Text><br></br>

      <Text style={{backgroundColor:'#DBDBDB',fontSize:18}}>Nuestras sucursales </Text><br></br>

      <Text style={{backgroundColor:'#DBDBDB',fontSize:18}}>Nuestro servicios: </Text><br></br>

      <MapView
        style={{
          width: Dimensions.get('window').width,
          height: '70%'
        }}

        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}



      />






    </View>



  );

}

export default ContactoMapas;