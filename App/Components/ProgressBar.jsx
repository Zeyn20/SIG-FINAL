import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function ProgressBar({progress}) {

  const screenWidth = Dimensions.get('screen').width*0.8;
  const progressWidth = screenWidth*(progress / 100);
  return (
    <View style={{
      height:7,
      backgroundColor:Colors.primary,
      borderRadius:99,
      width:progressWidth,
      overflow:'hidden'
    }}>
      <View style={{
        height: '100%',
        backgroundColor: Colors.primarybold,
        width: progressWidth
      }} />
    </View>
  )
}