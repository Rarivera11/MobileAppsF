import React from 'react';
import { View, Text} from 'react-native';
import styles from '../assets/css/Style' ;

function Ayuda({ navigation }) {//Luis Alejandro Paulino 2019-7391
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

export default Ayuda;