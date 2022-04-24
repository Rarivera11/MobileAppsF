import loginLogo from '../assets/image/cop.png';
import React, { useState } from 'react';
import { Button, View, Image, Text, TouchableNativeFeedback } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import styles from '../assets/css/Style';

import endPoints from "../Components/Constants/endPoints";
import { postData } from "../Actions";

var URL = endPoints; //URL for the API
var formData = new FormData();

function Login({ navigation }) {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const [dataLogin, setDataLogin] = useState({
    usuario: "",
    clave: "",
  });

  const signIn = () => {
    if (dataLogin.usuario !== "" && dataLogin.clave !== "") {
      formData.append('usuario', dataLogin.usuario)
      formData.append('clave', dataLogin.clave)
      getToken()
    } else {
      alert("AMBOS CAMPOS SON OBLIGATORIOS")
    }

  }

  const getToken = () => {
    postData(URL.endPoints.login, formData).then((result) => {
      if (result.data.data.token) {
        localStorage.setItem('token', result.data.data.token)
        setDataLogin({
          usuario: "",
          clave: "",
        })
        navigation.navigate('Resumen')
        alert("WELCOME")
      } else {
        alert("USUARIO Y/O CLAVE INCORRETO")
      }
    })
  }

  return (

    <View style={styles.inputContainer}>
      <br />

      <Image style={styles.stretch}
        source={loginLogo}
      />
      <Text style={styles.loginLabel}>Usuario</Text>
      <TextInput
        style={{ borderBottomEndRadius: 10, backgroundColor: '#F0EEEE', borderWidth: 1, borderRadius: 10, ...styles.input }}
        placeholder='Usuario'
        placeholderTextColor="#CBC5C5"
        value={dataLogin.usuario}
        onChange={(e) => setDataLogin({ ...dataLogin, usuario: e.target.value })}
        autoCorrect={false}
        autoCapitalize='none'
      /><br></br>
      <Text style={styles.loginLabel}>Clave</Text>
      <TextInput
        style={{ borderBottomEndRadius: 10, backgroundColor: '#F0EEEE', borderWidth: 20, borderRadius: 10, borderWidth: 1, ...styles.input }}
        placeholder='Clave'
        secureTextEntry={true}

        placeholderTextColor="#CBC5C5"
        value={dataLogin.clave}
        onChange={(e) => setDataLogin({ ...dataLogin, clave: e.target.value })}
        autoCorrect={false}
        autoCapitalize='none'
      />
      <br></br>


      <Button color="green" style={styles.btnLogin} title="Iniciar Sesion" onPress={signIn}></Button>

    </View>
  );
}

export default Login;