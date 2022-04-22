import source1 from '../assets/image/cop.png';
import React,{useState} from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../assets/css/Style' ;

function Noticias({ navigation }) {//Luis Alejandro Paulino 2019-7391
    return (
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}><br></br>

        <Text style={{fontSize:28}}>Noticias del momento</Text><br></br><br></br>
  
        <br />
        <View style={{ color: 'black', borderWidth: 1, width: 230 }}>
          <Image style={{ borderWidth: 1, width: 230, height: 100 }}
            source={source1}
          /><br></br>
          <p>
            este pdroducto conta con tales carateristicas
            este pdroducto conta con tales carateristicas
            este pdroducto conta con tales carateristicas
          </p>
  
        </View><br />
  
        <View style={{ color: 'black', borderWidth: 1, width: 230 }}>
          <Image style={{ borderWidth: 1, width: 230, height: 100 }}
            source={source1}
          /><br></br>
          <p>
            este pdroducto conta con tales carateristicas
            este pdroducto conta con tales carateristicas
            este pdroducto conta con tales carateristicas
          </p>
        </View><br />
  
        <View style={{ color: 'black', borderWidth: 1, width: 230 }}>
          <Image style={{ borderWidth: 1, width: 230, height: 100 }}
            source={source1}
          /><br></br>
         <p>
            este pdroducto conta con tales carateristicas
            este pdroducto conta con tales carateristicas
            este pdroducto conta con tales carateristicas
          </p>




          
  
        </View>
  
      </View>
    );
  }
  
export default Noticias;