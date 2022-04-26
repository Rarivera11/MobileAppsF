import source1 from '../assets/image/cop.png';
import React,{useState, useEffect} from 'react';
import endPoints  from "../Components/Constants/endPoints";
import { getData } from '../Actions';
import { Button,ScrollView,View, Text, Linking, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../assets/css/Style' ;

var URL = endPoints;

function Noticias({ navigation }) {

  const [noticias, setdataNoticias] = useState("")

  const getNoticias = async () => {
    await getData(URL.endPoints.noticias).then((result) => {
      if(!result.data.forceLogin){
        setdataNoticias(result.data.data)
      }else{
        alert("DEBE INICIAR SESION NUEVAMENTE")
      }
    })
}
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getNoticias();
    });
    return unsubscribe;
  }, [navigation]);


    return noticias.length > 0 ? (
        <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', marginBottom:20,...styles.container }}>
        <Text style={{fontSize:28}}>Noticias del momento</Text>
        {noticias.map((n, index) =>{
          return(
        
        <View key={index} style={{marginBottom:10,marginTop:10, color: 'black', borderWidth: 1, width: 230 }}>
          <Image style={{ borderWidth: 1, width: 228, height: 100 }}
            source={{uri:n.imagen}}
          />
          <Text onPress={() =>{Linking.openURL(n.link)}}>{n.title}</Text>
          <Text onPress={() =>{Linking.openURL(n.link)}}>{n.title}
            {String(n.content).replace(/\t/, "").replace(/\n/,"")}
          </Text>
  
        </View>
          )
})}
      </View>
</ScrollView>
     ) : (<Text>Cargando Data</Text>);
  }
  
export default Noticias;