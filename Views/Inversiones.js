import source1 from '../assets/image/cop.png';
import React,{useState} from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../assets/css/Style' ;


function Inversiones({ navigation }) {//Luis Alejandro Paulino 2019-7391
    return (
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>
  <Text style={{fontSize:28}}>Inversiones del momento</Text>
        
        <View style={{ color: 'black', borderWidth: 1, width: 203 }}>
          <Image style={{ borderWidth: 1, width: 200, height: 100 }}
            source={source1}
          />
               <Text>
            este pdroducto conta con tales carateristicas
            este pdroducto conta con tales carateristicas
            este pdroducto conta con tales carateristicas
          </Text>
        </View>
  
        <View style={{ color: 'black', borderWidth: 1, width: 203 }}>
          <Image style={{ borderWidth: 1, width: 200, height: 100 }}
            source={source1}
          />
                  <Text>
            este pdroducto conta con tales carateristicas
            este pdroducto conta con tales carateristicas
            este pdroducto conta con tales carateristicas
          </Text>
        </View>
  
        <View style={{ color: 'black', borderWidth: 1, width: 203 }}>
          <Image style={{ borderWidth: 1, width: 200, height: 100 }}
            source={source1}
          />
                <Text>
            este pdroducto conta con tales carateristicas
            este pdroducto conta con tales carateristicas
            este pdroducto conta con tales carateristicas
          </Text>
        </View>
  
      </View>
    );
  }

export default Inversiones;