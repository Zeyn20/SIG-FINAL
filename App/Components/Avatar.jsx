import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Colors from '../Utils/Colors'

export default function Avatar({ avatar }) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('Register',{
      avatar
    })}
    style={{backgroundColor:Colors.primary, marginRight:15, padding: 10, borderRadius:10, alignItems:'center'}}>
      <Image source={ avatar.imgSrc }
      style={{borderRadius:10, height:400, width:350}}
      />
      <View>
        <Text style={{fontSize:16, fontFamily:'outfit-bold', textAlign:'center'}}>{avatar.title}</Text>
      </View>
    </TouchableOpacity>
  )
}