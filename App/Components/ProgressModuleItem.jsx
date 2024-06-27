import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import ProgressBar from './ProgressBar';

export default function ProgressModuleItem({module}) {
  const navigation=useNavigation();

  // Suponiendo que module tiene totalCapitulos y capitulosCompletados
  const totalCapitulos = module.numCap; // total de capítulos
  const capitulosCompletados = module.progress; // capítulos completados

  const calcularPorcentajeCompletado = () => {
    if (totalCapitulos === 0) {
      return 0;
    }
    return (capitulosCompletados / totalCapitulos) * 100;
  };

  const porcentajeCompletado = calcularPorcentajeCompletado();

  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('module-detail',{
      module
    })}
    style={{backgroundColor:Colors.white, marginRight:15, padding: 10, borderRadius:10, gap:4, marginBottom:10}}>
      <Image source={ module.imgSrc }
      style={{borderRadius:10, height:170, width:300, alignSelf:'center'}}
      />
      <View style={{display:'flex', gap:3}}>
        <Text style={{fontSize:16, fontFamily:'outfit-bold',}}>{module.title}</Text>
        <Text style={{fontSize:14, fontFamily:'outfit', color:Colors.gray}}>{module.autor}</Text>
        <View style={{display:'flex', flexDirection:'row', gap:4, alignItems:'center'}}>
        <Ionicons name="book" size={24} color={Colors.primary} />
        <Text style={{color:Colors.gray, fontFamily:'outfit'}}>{module.numCap} Capitulos</Text>
        </View>
        <ProgressBar progress={porcentajeCompletado}/>
      </View>
    </TouchableOpacity>
  )
}