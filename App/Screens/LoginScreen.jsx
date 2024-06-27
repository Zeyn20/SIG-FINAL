import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react';
import React from 'react'
import Colors from '../Utils/Colors'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      paddingVertical:20,
      marginBottom: 40,
    }}>
      <Image source={require('./../../assets/images/rocket.jpg')} 
        style={{width:'100%', height:400, objectFit:'cover'}}
      />
      <View style={{padding:20}}>
        <Text style={{fontSize:45, fontWeight:'bold'}}>Bienvenido a 
          <Text style={{color:Colors.primarybold}}> Ciberseguridad</Text>
        </Text>
        <Text style={{fontSize:20, marginTop:7, color:Colors.gray}}>Aprende a mantenerte seguro</Text>

        {/* Input para Correo */}
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Input para Contraseña */}
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Boton Iniciar Sesion */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
          <Text style={{textAlign:'center', color:Colors.white, fontSize:18}}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{marginTop:10, color:Colors.primarybold, textAlign:'center', fontSize:16}}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    padding:16,
    backgroundColor:Colors.primarybold,
    borderRadius:99,
    marginTop:60
  },
  input: {
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20
  },
})