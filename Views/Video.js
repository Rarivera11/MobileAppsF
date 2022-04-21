import React,{useState} from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ReactPlayer from 'react-player';
import styles from '../assets/css/Style' ;

function Video({ navigation }) {//Luis Alejandro Paulino 2019-7391


    return (
  
      <View >
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', ...styles.container }}>
  
          <ReactPlayer
  
            url='https://www.youtube.com/watch?v=zo2uCbefgiI'
            width='80%'
            height='100%'
            controls
            playing
            muted
            loop
  
  
  
  
          />
  
        </View>
  
  
  
      </View>
    );
  
  }

  
export default Video;