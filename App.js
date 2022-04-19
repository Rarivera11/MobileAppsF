import 'react-native-gesture-handler'

import React from 'react'
import MyDrawer from './MyDrawer'
//import Prueba from './assets/pages/prueba'
import { Component } from 'react/cjs/react.production.min'
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

class App extends Component{



  
 HomeScreen=({ navigation })=> {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* aqui lo que va en el medio de la pantalla */}
      <Image 
           
          
      />

      <br/>
      <Text>Nombres:</Text>
      <Text>Luis Alejnadro Paulino Duverge</Text><br/>
      <Text>Matricula:</Text>
      <Text>2019-7391</Text><br/>
      <Text>Correo:</Text>
      <Text >Duvergejose022@gmail.com</Text>
    </View>
  );
}

 NotificationsScreen=({ navigation })=> {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Sumadora de Numeros</Text>
       
    </View>
  );
}

 TraductorScreen=({ navigation }) =>{
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Traductor de numeros</Text>
       
    </View>
  );
}


 TablaMultiplicarScreen=({ navigation }) =>{

 
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Tabla Multiplicar</Text>
       
    </View>
  );
}


 VideoScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Video Explicativo</Text>
       
    </View>
  );
}










  render(){
  return(
    <MyDrawer/>
  )}
}


export default App;