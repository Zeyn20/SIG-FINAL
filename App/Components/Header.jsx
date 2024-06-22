import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {

  const userData = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan@example.com',
      age: 30,
      interests: ['Tecnología', 'Deportes', 'Música']
    },
    {
      id: 2,
      name: 'María García',
      email: 'maria@example.com',
      age: 25,
      interests: ['Arte', 'Viajes', 'Cocina']
    },
    {
      id: 3,
      name: 'Pedro Martínez',
      email: 'pedro@example.com',
      age: 28,
      interests: ['Programación', 'Videojuegos', 'Lectura']
    }
  ];

  const user = userData[0];

  return (
    <>
    <View style={{display:'flex', flexDirection:'row', gap:5, alignItems:'center'}}>
      <Image source={require('./../../assets/images/rocket.jpg')} style={{width:45, height:45, borderRadius:99}}/>
      <View>
        <Text style={{fontSize:18, fontFamily:'outfit'}}>Bienvenido,</Text>
        <Text style={{fontSize:20, color:Colors.primary, fontFamily:'outfit-bold'}}>Hola {user.name}</Text>
      </View>
    </View>
    {/* <View style={styles.input}>
    <Ionicons name="search" size={24} color={Colors.gray} />
      <TextInput placeholder='Buscar' style={{fontFamily:'outfit',width:'100%'}} />
    </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor:Colors.white,
    padding: 10,
    borderRadius: 99,
    paddingHorizontal: 20, 
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor:Colors.primary
  }
})