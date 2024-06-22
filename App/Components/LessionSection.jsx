import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function LessionSection({ capitulo }) {

  const [isEnrolled, setIsEnrolled] = useState(true)
  const navigation = useNavigation()

  const renderCapitulo = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate('watch-lesson', { capitulo: item })}
    style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      padding:15,
      borderWidth:0.5,
      marginBottom:10,
      borderRadius:10
    }}>
      <View style={{
        display:'flex',
        flexDirection: 'row',
        gap:10,
        alignItems:'center'
      }}>
        <Text style={{
          fontSize:17,
          fontFamily:'outfit',
          padding:10,
          backgroundColor:Colors.second,
          borderRadius:99,
          width:40,
          height:40,
          textAlign:'center',
          color:Colors.primary
        }}>{item.id}</Text>
        <Text style={{
          fontFamily:'outfit-medium',
          fontSize:17
        }}>{item.name}</Text>
      </View>
      
      {isEnrolled||item.id==1? 
      <Ionicons name="play-circle" size={34} color="black" />
      : <Ionicons name="lock-closed" size={28} color={Colors.gray} />}
    </TouchableOpacity>
  );

  return (
    <View>
      <SectionHeading heading={'Capitulos'} />
      <FlatList
      data={capitulo}
      keyExtractor={(item)=>item.id.toString()}
      renderItem={renderCapitulo}
      />
      <View style={{
        height:50
      }}></View>
    </View>
  )
}