import React, { useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import source1 from '../assets/imagen/cop.png';
import ReactPlayer from 'react-player';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { collection, getDocs } from "firebase/firestore";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'white',
  },
  stretch: {
    width: 500,
    bottom: -0,
    height: 300,
    left: 150,
    resizeMode: 'stretch',
    backgroundColor: 'white',
  },
  modalbackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20
  },
  header: {
    width: '100%',
    height: '40',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }, boton: {
    backgroundColor: 'green',
    paddingTop: 15,
    paddingBottom: 15
  }
});

function HomeScreen({ navigation }) {//Luis Alejandro Paulino 2019-7391
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>

      <br />
      <View style={{ color: 'black', borderWidth: 1, width: 203 }}>
        <Image style={{ borderWidth: 1, width: 200, height: 100 }}
          source={source1}
        /><br></br>
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas

      </View><br />

      <View style={{ color: 'black', borderWidth: 1, width: 203 }}>
        <Image style={{ borderWidth: 1, width: 200, height: 100 }}
          source={source1}
        /><br></br>
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas

      </View><br />

      <View style={{ color: 'black', borderWidth: 1, width: 203 }}>
        <Image style={{ borderWidth: 1, width: 200, height: 100 }}
          source={source1}
        /><br></br>
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas

      </View>

    </View>
  );
}

function PaginaPrincipalScreen({ navigation }) {//Luis Alejandro Paulino 2019-7391
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
        <br></br>

        <Image style={styles.stretch}
          source={source1}
        />

        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
          placeholder='Cedula'
          placeholderTextColor="#CBC5C5"
          value={acciones.titulo}
          onChangeText={(value) => { setAcciones(value) }}
          autoCorrect={false}
          autoCapitalize='none'
        /><br></br>

        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
          placeholder='Contraseña'
          placeholderTextColor="#CBC5C5"
          value={acciones.fecha}
          onChangeText={(value) => { setAcciones(value) }}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <br></br>



        <TouchableHighlight

          style={[styles.boton]}
        >
          <Text style={[styles.Textboton]}><Text style={{ color: 'white' }}>Iniciar Sesion</Text></Text>
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

/* ------------------------- */


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
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>
        <br></br>

        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
          placeholder='Cedula'
          placeholderTextColor="#CBC5C5"
          value={acciones.titulo}
          onChangeText={(value) => { setAcciones(value) }}
          autoCorrect={false}
          autoCapitalize='none'
        /><br></br>

        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
          placeholder='Contraseña'
          placeholderTextColor="#CBC5C5"
          value={acciones.fecha}
          onChangeText={(value) => { setAcciones(value) }}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <br></br>



        <TouchableHighlight

          style={[styles.boton]}
        >
          <Text style={[styles.Textboton]}><Text style={{ color: 'white' }}>Iniciar Sesion</Text></Text>
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



/* ------------------------- */


function ConsultaCuentasAhorro({ navigation }) {//Luis Alejandro Paulino 2019-7391




  return (

    <View >
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>
        <br></br>

        <Text>Numero de Cuenta: </Text><br></br>
        <Text>Balance disponible: </Text><br></br>



        <br></br>


      </View>



    </View>
  );

}



function Descuentos({ navigation }) {//Luis Alejandro Paulino 2019-7391
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>

      <br />
      <View style={{ color: 'black', borderWidth: 1, width: 203 }}>
        <Image style={{ borderWidth: 1, width: 200, height: 100 }}
          source={source1}
        /><br></br>
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas

      </View><br />

      <View style={{ color: 'black', borderWidth: 1, width: 203 }}>
        <Image style={{ borderWidth: 1, width: 200, height: 100 }}
          source={source1}
        /><br></br>
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas

      </View><br />

      <View style={{ color: 'black', borderWidth: 1, width: 203 }}>
        <Image style={{ borderWidth: 1, width: 200, height: 100 }}
          source={source1}
        /><br></br>
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas

      </View>

    </View>
  );
}


function Inversiones({ navigation }) {//Luis Alejandro Paulino 2019-7391
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>

      <br />
      <View style={{ color: 'black', borderWidth: 1, width: 203 }}>
        <Image style={{ borderWidth: 1, width: 200, height: 100 }}
          source={source1}
        /><br></br>
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas

      </View><br />

      <View style={{ color: 'black', borderWidth: 1, width: 203 }}>
        <Image style={{ borderWidth: 1, width: 200, height: 100 }}
          source={source1}
        /><br></br>
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas

      </View><br />

      <View style={{ color: 'black', borderWidth: 1, width: 203 }}>
        <Image style={{ borderWidth: 1, width: 200, height: 100 }}
          source={source1}
        /><br></br>
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas
        este pdroducto conta con tales carateristicas

      </View>

    </View>
  );
}


function ConsultaPrestamos({ navigation }) {//Luis Alejandro Paulino 2019-7391


  return (

    <View >
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>
        <br></br>

        <Text>Numero de Cuenta: </Text><br></br>
        <Text>Numero de Prestamo: </Text><br></br>
        <Text>Cantidad total: </Text><br></br>
        <Text>Cuota mensual: </Text><br></br>



        <br></br>


      </View>



    </View>
  );

}



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

    <View >
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>
        <br></br>

        <Text>Escribe aqui tus Sugerencias</Text><br></br>

        <br></br>

        <TextInput
          style={{ height: 100, width: 200, borderColor: 'black', borderWidth: 1 }}

          placeholderTextColor="#CBC5C5"
          value={acciones.fecha}
          onChangeText={(value) => { setAcciones(value) }}
          autoCorrect={false}
          autoCapitalize='none'
        />


        <br></br>



        <TouchableHighlight

          style={[styles.boton]}
        >
          <Text style={[styles.Textboton]}><Text style={{ color: 'white' }}>Enviar</Text></Text>
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



function video({ navigation }) {//Luis Alejandro Paulino 2019-7391




  return (

    <View >
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>

        <ReactPlayer

          url='https://www.youtube.com/watch?v=zo2uCbefgiI'
          width='80%'
          height='100%'
          controls
          playing
          muted
          loop




        />

      </View>



    </View>
  );

}



function Preguntas({ navigation }) {//Luis Alejandro Paulino 2019-7391
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
        <br></br>

        <Text>Preguntas Frecuentes</Text><br></br>

        <br></br>

        <TextInput
          style={{ height: 100, width: 200, borderColor: 'black', borderWidth: 1 }}

          placeholderTextColor="#CBC5C5"
          value={acciones.fecha}
          onChangeText={(value) => { setAcciones(value) }}
          autoCorrect={false}
          autoCapitalize='none'
        />


        <br></br>



        <TouchableHighlight

          style={[styles.boton]}
        >
          <Text style={[styles.Textboton]}><Text style={{ color: 'white' }}>Enviar</Text></Text>
        </TouchableHighlight>




      </View>


    </View>
  );

}



function ContactoMapas({ navigation }) {//Luis Alejandro Paulino 2019-7391
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
        <br></br>

        <Text>Comunicate con nosotros</Text><br></br>


        <Text>Nuestros numeros : 456325465</Text><br></br>

        <Text>Nuestras sucursales </Text><br></br>

        <Text>Nuestro servicios: </Text><br></br>





      </View>


    </View>
  );

}




function ayuda({ navigation }) {//Luis Alejandro Paulino 2019-7391
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
        <br></br>

        <Text>Apartado de ayuda</Text><br></br>







      </View>


    </View>
  );

}




function cambiarclave({ navigation }) {//Luis Alejandro Paulino 2019-7391
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
        <br></br>

        <Text>Ingresa tu Contraseña actual</Text><br></br>

        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
          placeholder='Contraseña'
          placeholderTextColor="#CBC5C5"
          value={acciones.titulo}
          onChangeText={(value) => { setAcciones(value) }}
          autoCorrect={false}
          autoCapitalize='none'
        /><br></br>

        <Text>Ingresa tu Contraseña Nueva</Text><br></br>

        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
          placeholder='Contraseña'
          placeholderTextColor="#CBC5C5"
          value={acciones.fecha}
          onChangeText={(value) => { setAcciones(value) }}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <br></br>

        <TouchableHighlight

          style={[styles.boton]}
        >
          <Text style={[styles.Textboton]}><Text style={{ color: 'white' }}>Cambiar</Text></Text>
        </TouchableHighlight>







      </View>


    </View>
  );

}












const Drawer = createDrawerNavigator();



export default function MyDrawer() {//Luis Alejandro Paulino 2019-7391
  return (

    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name='Login' component={PaginaPrincipalScreen} />
        <Drawer.Screen name="Noticias" component={HomeScreen} />
        <Drawer.Screen name="Recuperar Contraseña" component={RecuperarContrasena} />
        <Drawer.Screen name="Consultar Cuentas de Ahorros" component={ConsultaCuentasAhorro} />
        <Drawer.Screen name="Descuentos" component={Descuentos} />
        <Drawer.Screen name="Inversiones" component={Inversiones} />
        <Drawer.Screen name="Consulta de Prestamos" component={ConsultaPrestamos} />
        <Drawer.Screen name="Videos Informativos" component={video} />
        <Drawer.Screen name="Sugerencias" component={Sugerencias} />
        <Drawer.Screen name="Preguntas Frecuentes" component={Preguntas} />
        <Drawer.Screen name="Contactanos" component={ContactoMapas} />
        <Drawer.Screen name="Ayuda" component={ayuda} />
        <Drawer.Screen name="Cambiar Clave" component={cambiarclave} />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}



