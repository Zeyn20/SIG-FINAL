// Step1.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../Utils/Colors';

const Step1 = ({ onNext, name, setName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Ingrese su nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={{
        width:'100%',
        backgroundColor:Colors.primarybold,
        padding: 5,
        borderRadius:99,
        alignItems:'center'
      }} onPress={onNext}>
        <Text style={{
          color:Colors.white,
          fontFamily:'outfit-medium',
          fontSize:18
        }}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily:'outfit-bold'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default Step1;