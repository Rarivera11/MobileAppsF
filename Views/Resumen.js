import React, {useEffect, useState} from 'react';
import { View, Text} from 'react-native';
import styles from '../assets/css/Style' ;
import endPoints  from "../Components/Constants/endPoints";
import { postData } from "../Actions";

var URL = endPoints; //URL for the API
var formData = new FormData();

function Resumen({ navigation }) {//Luis Alejandro Paulino 2019-7391
  
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [dataCuentas, setDataCuentas] = useState(localStorage.getItem('cuentas'))
  const [dataPrestamos, setDataPrestamos] = useState(localStorage.getItem('prestamos'))

  const getResumen = async () => {
    formData.append('token',token)
    await postData(URL.endPoints.resumen, formData).then((result) => {
      if(!result.data.forceLogin){
        console.log(result.data.data.cuentas)
        localStorage.setItem('cuentas',result.data.data.cuentas.json())
        localStorage.setItem('prestamos',result.data.data.prestamos)
      }else{
        alert("DEBE INICIAR SESION NUEVAMENTE")
        navigation.navigate('Login');
      }
    })
    console.log(dataCuentas)
}
 useEffect(() =>{
   getResumen();
 }, [])

    return  (
  
      <View >
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>
          <br></br>
  
          {/* <Text>{dataCuentas.map((cuentas) => {
            cuentas.idcuenta
          })}</Text><br></br>
           <Text>{dataCuentas.map((cuentas) => {
            cuentas.balance_disponible
          })}</Text><br></br> */}
  
  
  
  
  
  
  
        </View>
  
  
      </View>
    );
  
  }

export default Resumen;