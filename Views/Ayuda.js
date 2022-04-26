import React from 'react';
import { View, Text} from 'react-native';
import styles from '../assets/css/Style' ;

function Ayuda({ navigation }) {
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
          
  
          <Text>Apartado de ayuda</Text>
  
  
  
  
  
  
  
        </View>
  
  
      </View>
    );
  
  }

export default Ayuda;