import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors';

export const userData = [
  {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan@example.com',
    age: 30,
    imgSrc:require('./../../assets/images/rocket.jpg'),
    interests: ['Tecnología', 'Deportes', 'Música']
  },
  {
    id: 2,
    name: 'María García',
    email: 'maria@example.com',
    age: 25,
    imgSrc:require('./../../assets/images/firewall.png'),
    interests: ['Arte', 'Viajes', 'Cocina']
  },
  {
    id: 3,
    name: 'Pedro Martínez',
    email: 'pedro@example.com',
    age: 28,
    imgSrc:require('./../../assets/images/rocket.jpg'),
    interests: ['Programación', 'Videojuegos', 'Lectura']
  }
];

export default function Header() {

  const user = userData[1];

  return (
    <View style={{display:'flex', flexDirection:'row', gap:5, alignItems:'center'}}>
      <Image source={user.imgSrc} style={{width:45, height:45, borderRadius:99}}/>
      <View>
        <Text style={{fontSize:18, fontFamily:'outfit'}}>Bienvenido,</Text>
        <Text style={{fontSize:20, color:Colors.primarybold, fontFamily:'outfit-bold'}}>Hola {user.name}</Text>
      </View>
    </View>
  )
}