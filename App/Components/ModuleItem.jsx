import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ModuleItem({module}) {
  const navigation=useNavigation();
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('module-detail',{
      module
    })}
    style={{backgroundColor:Colors.white, width:300, marginRight:15, padding: 10, borderRadius:10, gap:4, marginBottom:10, alignSelf:'center'}}>
      <Image source={ module.imgSrc }
      style={{width:280,borderRadius:10, height:130}}
      />
      <View style={{display:'flex', gap:3}}>
        <Text style={{fontSize:16, fontFamily:'outfit-bold',}}>{module.title}</Text>
        <Text style={{fontSize:14, fontFamily:'outfit', color:Colors.gray}}>{module.autor}</Text>
        <View style={{display:'flex', flexDirection:'row', gap:4, alignItems:'center'}}>
        <Ionicons name="book" size={24} color={Colors.primary} />
        <Text style={{color:Colors.gray, fontFamily:'outfit'}}>{module.numCap} Capitulos</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}