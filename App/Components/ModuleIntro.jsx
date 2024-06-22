import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import SectionHeading from './SectionHeading';

export default function ModuleIntro({ module }) {
  return (
    <View>
      <Image source={module.imgSrc}
      style={{width:'100%',borderRadius:10, height:240}}
      resizeMode='contain'
      />
        <View style={{display:'flex',
          backgroundColor:Colors.white, padding:10, borderRadius:10, gap:10}}>
          <Text style={{fontSize:22, fontFamily:'outfit-bold'}}>{module.title}</Text>
          <Text style={{fontSize:14, fontFamily:'outfit', color:Colors.gray}}>{module.autor}</Text>
            <View style={{display:'flex', flexDirection:'row', gap:4, alignItems:'center'}}>
              <Ionicons name="book" size={24} color={Colors.primary} />
              <Text style={{color:Colors.gray, fontFamily:'outfit'}}>{module.numCap} Capitulos</Text>
            </View>
          <SectionHeading heading={'Descripción'} />
          <Text numberOfLines={5} 
          style={{marginTop:-10, fontFamily:'outfit'}}>{module.description}</Text>
        </View>
      </View>
  )
}