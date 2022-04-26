import loginLogo from '../assets/image/cop.png';
import React, { useState } from 'react';
import { Button, View, Image, Text, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from '../assets/css/Style';



import endPoints from "../Components/Constants/endPoints";
import { postData } from "../Actions";

var URL = endPoints;

function Login({ navigation }) {

  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('token', value)
    } catch (e) {
    }
  }


  const getToken = () => {
  
    
    var formData = new FormData();
    if (usuario !== "" && clave !== "") {
      formData.append('usuario', usuario)
      formData.append('clave', clave)
      postData(URL.endPoints.login, formData).then((result) => {
        if(result.data.data.token){
        
        storeData(result.data.data.token)
          
       setUsuario("")
       setClave("")
      
        navigation.navigate('Resumen',{
          userData:result.data.data

        }
        )

      }else{
        alert("USUARIO Y/O CLAVE INCORRECTO")
      }
      }).catch(()=>{
        alert("VERIFIQUE SU")
      })
    } else {

      alert("AMBOS CAMPOS SON OBLIGATORIOS")
    }

  }


  return (

    <View style={Styles.inputContainer}>
      

      <Image style={Styles.stretch}
        source={loginLogo}
      />
      <TextInput
        style={Styles.input}
        placeholder='Usuario'
        placeholderTextColor="#CBC5C5"
        onChangeText={(e) => setUsuario(e)}
        value={usuario}
        autoCorrect={false}
        autoCapitalize='none'
      />
      <TextInput
        style={Styles.input }
        placeholder='Clave'
        secureTextEntry={true}
        placeholderTextColor="#CBC5C5"
        onChangeText={(e) => setClave(e)}
        value={clave}
        autoCorrect={false}
        autoCapitalize='none'
      />
      

    <TouchableHighlight style={Styles.btnLogin}>
      <Button color="green" title="Iniciar Sesion" onPress={getToken}></Button>
      </TouchableHighlight>
      <Text style={Styles.recoverLabel}>¿Tienes problemas para Iniciar Sesion?</Text>
    </View>
  );
}

export default Login;