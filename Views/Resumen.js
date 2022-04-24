import React, {useEffect, useState} from 'react';
import { View, Text} from 'react-native';
import styles from '../assets/css/Style' ;
import endPoints  from "../Components/Constants/endPoints";
import { postData } from "../Actions";

var URL = endPoints; //URL for the API
var formData = new FormData();



function Resumen({ navigation }) {//Luis Alejandro Paulino 2019-7391
  
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [dataCuentas, setdataCuentas] = useState([])
  const [dataPrestamos, setdataPrestamos] = useState([])

  const getResumen = async () => {
    formData.append('token',token)
    await postData(URL.endPoints.resumen, formData).then((result) => {
      if(!result.data.forceLogin){
        setdataCuentas(result.data.data.cuentas)
        setdataPrestamos(result.data.data.prestamos)
      }else{
        alert("DEBE INICIAR SESION NUEVAMENTE")
        navigation.navigate('Login')
      }
    })
}
 useEffect(() =>{
   getResumen();
 }, [])

    return dataCuentas.length > 0 ? (
      
      <View >
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>
          <br></br>

           <Text>{dataCuentas.map((cuentas, index) => {
            return (
              <p key={index}>{cuentas.idcuenta}</p>
              )
          })}</Text>
  
  
  
  
  
  
  
        </View>
  
  
      </View>
    ) : (<><p>Data CArgando</p> </>);
  
  }

export default Resumen;