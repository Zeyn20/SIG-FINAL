import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import React from 'react'
import Colors from '../Utils/Colors';

export default function WelcomeScrenn({ navigation  }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, ¿es tu primera vez?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={{
          backgroundColor:Colors.primary,
          padding:10,
          width:'100%',
          borderRadius:99,
          marginBottom:10,
          alignItems: 'center'
        }}
          onPress={() => navigation.navigate('AvatarSelection')}
        >
          <Text style={{
            fontFamily:'outfit-bold',
            fontSize: 18
          }}>SI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor:Colors.second,
          padding:10,
          width:'100%',
          borderRadius:99,
          marginBottom:10,
          alignItems: 'center'
        }}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{
             fontFamily:'outfit-bold',
             fontSize: 18,
          }}>NO</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        display:'flex',
        width:200,
        height:200,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'center',
        marginTop:10
      }}>
        <Image style={{
          width:200, 
          height: 200
        }} source={require('./../../assets/images/osito1.png')} />
        <Image style={{
          width:200, 
          height: 200
        }} source={require('./../../assets/images/osito2.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontFamily: 'outfit-bold',
    marginBottom: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems:'center',
    width: '100%',
    marginTop: 20,
  },
});