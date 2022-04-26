import React, {useEffect, useState} from 'react';
import { ScrollView,View, Text} from 'react-native';
import Styles from '../assets/css/Style' ;
import endPoints  from "../Components/Constants/endPoints";
import { postData } from "../Actions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";

var URL = endPoints;


function Resumen({ route, navigation }) {
  const dataReceive = route.params;
  const getData = async () => {
    
    try {
      const value = await AsyncStorage.getItem('token')
      if(value !== null) {
        getResumen(value);
      }
    } catch(e) {
    }
  }
  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  const [dataCuentas, setdataCuentas] = useState([])
  const [dataPrestamos, setdataPrestamos] = useState([])

  const getResumen = async (value) => {
    var formData = new FormData();
    formData.append('token',`${value}`)
    await postData(URL.endPoints.resumen, formData).then((result) => {
      if(!result.data.forceLogin){
        setdataCuentas(result.data.data.cuentas)
        setdataPrestamos(result.data.data.prestamos)
      }else{
        alert("DEBE INICIAR SESION NUEVAMENTE")
      }
    })
}
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

    return dataCuentas.length > 0 ? (
      
      <View >
        <ScrollView>
        <View style={Styles.userName}>
          {
          <><Text style={Styles.lblWelcome}>Hola</Text><Text style={Styles.lbluserName}> {dataReceive.userData.nombre}</Text></>
          }
          </View>
          <>
          <Text style={Styles.lblcuenta}>Cuentas</Text>
          <View >
          <View>
           {dataCuentas.map((cuentas, index) => {
             return (
               
              <View key={index}>
                <View style={Styles.resumenTipo} >
                  <Text style={{color:"black", ...Styles.labelTitle}} >Cuenta {cuentas.tipo}</Text>
                  <Text style={{color:"black"}} >{cuentas.idcuenta}</Text>
                </View>
                <View style={Styles.resumenBalance}> 
                  <Text style={{color:"black",...Styles.labelDesc}}>Balance Disponible</Text>
                  <Text style={{color:"black",...Styles.balance}}>{cuentas.balance_disponible}</Text>
                </View>
                <View style={Styles.division}></View>

                </View>
         
              )
          })}
                 </View>
                 
              </View>
              <Text style={Styles.lblcuenta}>Prestamos</Text>
                <View>
                <View>
                {dataPrestamos.map((prestamos, index) => {
                          return (
                            
                          <View key={index}>
                           <View style={Styles.resumenTipo} >
                              <Text  style={{color:"black", ...Styles.labelTitle}} >Prestamo {prestamos.descripcion}</Text>
                              <Text style={{color:"black"}}>{prestamos.idprestamo}</Text>
                            </View>
                            <View style={Styles.resumenBalance}> 
                              <Text style={{color:"black",...Styles.labelDesc}} >Balance Disponible</Text>
                              <Text style={{color:"black",...Styles.balance}}>{numberWithCommas(financial(prestamos.monto_prestamo))}</Text>
                            </View>
                            <View style={Styles.division}></View>
                            </View>

                          )
                        })}
                      </View>
                 
              </View>
          </>
          </ScrollView>
      </View>
    ) : (<Text>Cargando Data</Text>);
  
  }

export default Resumen;

