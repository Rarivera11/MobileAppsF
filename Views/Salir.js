import React,{useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text} from 'react-native';


function Salir({ navigation }) {

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('token')
          if(value !== null) {
              AsyncStorage.removeItem('token')
              navigation.navigate('Login')
            }else{
                navigation.navigate('Login')
            }
        } catch(e) {
        }
    }
    
      useEffect(() => {
          const unsubscribe = navigation.addListener('focus', () => {
          getData();
        });
        return unsubscribe;
      }, [navigation]);

return (

 <View>
    <Text>Cerrando Sesion</Text>
 </View>
)
}

export default Salir;
