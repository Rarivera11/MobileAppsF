
import React, { useState } from 'react';
import { Button,ScrollView, SafeAreaView, View, Text, Image, StyleSheet, TouchableHighlight, Card, ImageBackground, FlatList, Alert, Modal, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import loginLogo from '../assets/image/cop.png';
import dgi from '../assets/image/dgi.jpg';

import MapView, {Marker}  from 'react-native-maps';

import styles from '../assets/css/Style';


function ContactoMapas({ navigation }) {

  const coopDgiiLocation ={
        
    latitude: 18.474146,
    longitude: -69.902872,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (

<SafeAreaView >
      <ScrollView style={{marginBottom:15}} >



<Image style={{ height: 150, width: 400 }} source={dgi} />

<View style={{ left: 40,marginTop:30,marginBottom:20 }}>
          <Text style={{ fontSize: 35, color: 'grey' }}>Nuestras Areas De Servicios</Text>
        </View>

        <View style={{ left: 90,marginBottom:30 }}>
        <View style={{left: -10 }}>
            <Image style={{ height: 40, width: 40, right: 5 }}
              source={{
                uri:'https://coopdgii.com/wp-content/uploads/2021/10/MicrosoftTeams-image-4.jpg'}}
            />
            <Text >Yohanny Duarte</Text>
          </View>
          <Text style={{ color: 'green' }}>Oficial de Servicios</Text>
          <Text>Nuestra área de servicio siempre {'\n'}innovando para mantener informado {'\n'}a todos socios. </Text>
          <Text>Tel: 809-287-2875</Text>
          <Text>Correo: yduarte@dgii.gov.do</Text>
      </View>              
    <View style={{ left: 90,marginBottom:30 }}>
    <View style={{left: -10 }}>
            <Image style={{ height: 40, width: 40, right: 5 }}
              source={{
                uri:'https://coopdgii.com/wp-content/uploads/2021/10/MicrosoftTeams-image-6.jpg'}}
            />
            <Text >Anny Rodrigez</Text>
          </View>
<Text style={{ color: 'green' }}>Oficial de Servicios</Text>
<Text>Nuestra área de servicio siempre {'\n'}innovando para mantener informado {'\n'}a todos socios. </Text>
<Text>Tel: 809-287-2875</Text>
<Text>Correo: annrodrigu@dgii.gov.do</Text>


</View>

<View style={{ left: 90, marginBottom:30 }} >
<View style={{left: -10 }}>
            <Image style={{ height: 40, width: 40, right: 5 }}
              source={{
                uri:'https://coopdgii.com/wp-content/uploads/2021/10/MicrosoftTeams-image-3.jpg'}}
            />
            <Text >Yulitza Nuñez</Text>
          </View>
<Text style={{ color: 'green' }}>Cajera Oficial de Servicios</Text>
<Text>Nuestra área de servicio siempre {'\n'}innovando para mantener informado {'\n'}a todos socios. </Text>
<Text>Tel: 809-287-2833</Text>
<Text>Correo: ymnunezb@dgii.gov.do</Text>
</View>
<MapView
        style={{
          width: Dimensions.get('window').width,
          height:200,
          marginBottom:30
        }}
        initialRegion={coopDgiiLocation}
     >


        <Marker coordinate={coopDgiiLocation} />
      </MapView>
      <View style={{alignItems:"center"}}>

      <Image style={{ height: 100, width: 100 }}
        source={loginLogo}
        /> 

      <Text style={{color:'gray', fontSize:20}}>Conctatos</Text>

      

      <Text style={{color:'gray'}}>Whatsapp</Text>
      <Text style={{color:'gray'}}>(849) 451-0798</Text>

      <Text style={{color:'gray'}}>Oficina</Text>
      <Text style={{color:'gray'}}>(809) 287-2700</Text>
      <Text style={{color:'gray'}}>info@coopdgii.com</Text>


      <Text style={{color:'gray'}}>Locacion</Text>
      <Text style={{color:'gray'}}>Av.Pedro Henriquez Ureña #29 Gazcue</Text>
      <Text style={{color:'gray'}}>Santo Domingo</Text>
      <Text style={{color:'gray'}}>Republica Domincana</Text>

        </View>


      </ScrollView>
    </SafeAreaView>




  );

}

export default ContactoMapas;