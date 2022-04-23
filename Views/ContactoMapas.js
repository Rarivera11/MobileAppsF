
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



      /><br></br><br></br>

      <Image style={{ height: 100, width: 100 }}
        source={loginLogo}
      /> <br></br><br></br>

      <Text style={{color:'grey', fontSize:20}}>Conctatos</Text>

      <br></br><br></br>

      <Text style={{color:'grey'}}>Whatsapp</Text>
      <Text style={{color:'grey'}}>(849) 451-0798</Text><br></br>

      <Text style={{color:'grey'}}>Oficina</Text>
      <Text style={{color:'grey'}}>(809) 287-2700</Text>
      <Text style={{color:'grey'}}>info@coopdgii.com</Text><br></br><br></br>


      <Text style={{color:'grey'}}>Locacion</Text>
      <Text style={{color:'grey'}}>Av.Pedro Henriquez Ureña #29 Gazcue</Text>
      <Text style={{color:'grey'}}>Santo Domingo</Text>
      <Text style={{color:'grey'}}>Republica Domincana</Text>






    </View>



  );

}

export default ContactoMapas;