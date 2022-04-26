import React, {useEffect, useState} from 'react';
import { Button,ScrollView,View, Text, Linking, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { createDrawerNavigator, DrawerContent, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DrawerActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


/*******************VIEWS****************** */

import Login from './Views/Login';
import Resumen from './Views/Resumen'
import Noticias from './Views/Noticias';
import RecuperarContrasena from './Views/RecuperarContrasena';
import ConsultaCuentasAhorro from './Views/ConsultaCuentasAhorro';
import Descuentos from './Views/Descuentos';
import Inversiones from './Views/Inversiones';
import ConsultaPrestamos from './Views/ConsultaPrestamos';
import Video from './Views/Video';
import Sugerencias from './Views/Sugerencias';
import Preguntas from './Views/Preguntas';
import ContactoMapas from './Views/ContactoMapas';
import Ayuda from './Views/Ayuda';
import Salir from './Views/Salir';


/*********************************************** */

const Drawer = createDrawerNavigator();


const MyTheme = {
  ...DefaultTheme, 
  colors:{
    ...DefaultTheme.colors,
    background:'white',
    primary:"gray",
    text:"black",
    border:"green",
  },
  
}

export default function MyDrawer() {
  
  const [token, setToken] = useState(false);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if(value !== null) {
        setToken(true)
      }else{
        setToken(false)
      }
    } catch(e) {
    }
  }

  useEffect(()=>{
    getData()
  },[])

var init = "Login";
token ? init = "Resumen" : init = "Login";

return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName={`${init}`}>
        <Drawer.Screen name='Login' component={Login} options={{
          headerShown:false, drawerItemStyle:{height:0}
        }} />
        <Drawer.Screen name="Resumen" component={Resumen} />
        <Drawer.Screen name="Noticias" component={Noticias} />
        <Drawer.Screen name="Recuperar Contraseña" component={RecuperarContrasena} />
        <Drawer.Screen name="Consultar Cuentas de Ahorros" component={ConsultaCuentasAhorro} />
        <Drawer.Screen name="Descuentos" component={Descuentos} />
        <Drawer.Screen name="Inversiones" component={Inversiones} />
        <Drawer.Screen name="Consulta de Prestamos" component={ConsultaPrestamos} />
        <Drawer.Screen name="Videos Informativos" component={Video} />
        <Drawer.Screen name="Sugerencias" component={Sugerencias} />
        <Drawer.Screen name="Preguntas Frecuentes" component={Preguntas} />
        <Drawer.Screen name="Contactanos" component={ContactoMapas} />
        <Drawer.Screen name="Ayuda" component={Ayuda} />
        <Drawer.Screen name="Salir" component={Salir} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}