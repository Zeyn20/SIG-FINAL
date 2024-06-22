import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function QuizSection() {
  return (
    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', marginTop:15, marginBottom:15}}>
      <TouchableOpacity onPress={()=>Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSeWfLidtJ6xk0BWLP4lBK-vtaU2enuMroIyJIT6ZXnBQeGEFg/viewform?usp=sf_link')} style={{padding:15, backgroundColor:Colors.white, alignItems:'center', borderRadius:10, width:110, borderWidth:0.4}}>
        <Image source={require('./../../assets/images/form.png')}
        style={{width:40, height:40}}
        />
        <Text style={{fontFamily:'outfit-bold', fontSize:14}}>Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:15, backgroundColor:Colors.white, alignItems:'center', borderRadius:10, width:110, borderWidth:0.4}}>
        <Image source={require('./../../assets/images/results.png')}
        style={{width:40, height:40}}
        />
        <Text style={{fontFamily:'outfit-bold', fontSize:14}}>Resultados</Text>
      </TouchableOpacity>
    </View>
  )
}