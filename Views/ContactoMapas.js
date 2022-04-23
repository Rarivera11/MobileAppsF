
import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, Card, ImageBackground, FlatList, Alert, Modal, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import loginLogo from '../assets/image/cop.png';
import dgi from '../assets/image/dgi.jpg';


import MapView from 'react-native-maps';

import styles from '../assets/css/Style';

function ContactoMapas({ navigation }) {//Luis Alejandro Paulino 2019-7391


  return (


    <View style={{ flex: 1, backgroundColor: '', alignItems: 'center' }}>

      <Image style={{ height: 70, width: 70 }}
        source={loginLogo}
      />

      <View>

        <Image style={{ height: 150, width: 400 }}
          source={dgi}
        /><br></br><br></br><br></br>

        <View style={{ left: 40 }}>
          <Text style={{ fontSize: 35, color: 'grey' }}>Nuestras Areas De Servicios</Text>
        </View>
        <br></br><br></br>



        <View style={{ left: 90 }}>

          <View style={{ flexDirection: 'initial', left: -10 }}>
            <Image style={{ height: 40, width: 40, right: 5 }}
              source={loginLogo}
            />
            <Text >Luis Paulino</Text>
          </View>
          <Text style={{ color: 'green' }}>Analista Sistemas</Text><br></br>
          <Text>Nuestra area siempre imnovadora para <br></br> nuestro servicio al cliente</Text><br></br>
          <Text>Tel: 81056151651</Text>
          <Text>Correo: ejemplo@gmail.com</Text>


        </View><br></br><br></br><br></br>

        <View style={{ left: 90 }}>

          <View style={{ flexDirection: 'initial', left: -10 }}>
            <Image style={{ height: 40, width: 40, right: 5 }}
              source={loginLogo}
            />
            <Text >Luis Paulino</Text>
          </View>
          <Text style={{ color: 'green' }}>Analista Sistemas</Text><br></br>
          <Text>Nuestra area siempre imnovadora para <br></br> nuestro servicio al cliente</Text><br></br>
          <Text>Tel: 81056151651</Text>
          <Text>Correo: ejemplo@gmail.com</Text>


        </View><br></br><br></br><br></br>

        <View style={{ left: 90 }}>

          <View style={{ flexDirection: 'initial', left: -10 }}>
            <Image style={{ height: 40, width: 40, right: 5 }}
              source={loginLogo}
            />
            <Text >Luis Paulino</Text>
          </View>
          <Text style={{ color: 'green' }}>Analista Sistemas</Text><br></br>
          <Text>Nuestra area siempre imnovadora para <br></br> nuestro servicio al cliente</Text><br></br>
          <Text>Tel: 81056151651</Text>
          <Text>Correo: ejemplo@gmail.com</Text>


        </View><br></br><br></br><br></br>



      </View>








      <MapView
        style={{
          width: Dimensions.get('window').width,
          height: '30%'
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