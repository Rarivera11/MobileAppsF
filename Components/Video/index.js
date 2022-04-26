import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import {View } from 'react-native';

class ResponsivePlayer extends React.Component {
    render () {
      return (
        <View>
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
      )
    }
  }

export default ResponsivePlayer;