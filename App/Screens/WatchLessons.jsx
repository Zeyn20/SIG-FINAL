import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

export default function WatchLessons() {

  const route = useRoute()
  const navigation = useNavigation()
  const {capitulo} = route.params

  return (
    <View style={{
      padding:20,
      marginTop:25
    }}>
      <View style={{display:'flex', flexDirection:'row', alignItems:'center',gap:75}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>
      <Text style={{fontSize:27, fontFamily:'outfit-bold'}}>Capitulo {capitulo.id}</Text>
      </View>
      <Image source={capitulo.imgCap}
      style={{width:'100%',borderRadius:10, height:240}}
      resizeMode='cover'
      />
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: 15
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:20,
          width:200
        }}>{capitulo.name}</Text>
        <TouchableOpacity style={{
          backgroundColor:Colors.primary,
          padding:4,
          borderRadius:4,
          paddingHorizontal:8
        }}>
          <Text style={{
            color:Colors.white,
            textAlign:'center',
            fontFamily:'outfit'
          }}>Marcar completado</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}