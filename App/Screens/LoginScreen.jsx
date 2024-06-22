import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function LoginScreen({ onLogin }) {
  // const handleSignUp = async () => {
    
  // };

  const handleLogin = () => {
    onLogin();
  };

  return (
    <View>
      <Image source={require('./../../assets/images/rocket.jpg')} 
        style={{width:'100%', height:400, objectFit:'cover'}}
      />
      <View style={{padding:20}}>
        <Text style={{fontSize:45, fontWeight:'bold'}}>Bienvenido a 
          <Text style={{color:Colors.primary}}> Ciberseguridad</Text>
        </Text>
        <Text style={{fontSize:20, marginTop:7, color:Colors.gray}}>Aprende a mantenerte seguro</Text>

        {/* Boton Iniciar Sesion */}
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={{textAlign:'center', color:Colors.white, fontSize:18}}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{marginTop:10, color:Colors.primary, textAlign:'center', fontSize:16}}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    padding:16,
    backgroundColor:Colors.primary,
    borderRadius:99,
    marginTop:60
  }
})