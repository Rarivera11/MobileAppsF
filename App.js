import React, {useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


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

/*********************************************** */

const Drawer = createDrawerNavigator();


const MyTheme = {
  ...DefaultTheme, 
  colors:{
    ...DefaultTheme.colors,
    background:'white'
  }
}

export default function MyDrawer() {
  const [token, setToken] = useState(localStorage.getItem('token'))


/*   <Drawer.Screen name="Resumen" component={Resumen} />
 */
  return (
    token !== null ?
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name='Login' component={Login} />
        
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
      </Drawer.Navigator>
    </NavigationContainer>
  :
  <NavigationContainer theme={MyTheme}>
  <Drawer.Navigator initialRouteName="Login">
    <Drawer.Screen name='Login' component={Login} />
  </Drawer.Navigator>
</NavigationContainer>
  );
}