import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ReactPlayer from 'react-player/youtube';
import styles from '../assets/css/Style';

function Video({ navigation }) {


  return (


   <View style={{position:"relative",paddingTop:"56.25%"}}>
      <ReactPlayer

        style={{position:"absolute",top:0,left:0}}
        url='https://www.youtube.com/watch?v=zo2uCbefgiI'
        width='80%'
        height='100%'
        controls
        playing
        muted
        loop

      ></ReactPlayer>
</View>



  );

}


export default Video;