import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import React from 'react';
import Colors from '../Utils/Colors';
import { login } from '../Services/api';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await login({ correo: email, password });
      console.log('Respuesta de la API:', response);
      await AsyncStorage.setItem('token', response.token); // Almacena el token en AsyncStorage
      navigation.navigate('Home'); // Redirige a la página de inicio después de iniciar sesión
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Alert.alert('Error', 'Correo o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/images/rocket.jpg')} style={styles.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Bienvenido a
          <Text style={styles.highlight}> Cyber Sensei</Text>
        </Text>
        <Text style={styles.subtitle}>Aprende a mantenerte seguro</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    marginBottom: 40,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  innerContainer: {
    padding: 20,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  highlight: {
    color: Colors.primarybold,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 7,
    color: Colors.gray,
  },
  input: {
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  button: {
    padding: 16,
    backgroundColor: Colors.primarybold,
    borderRadius: 99,
    marginTop: 60,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 18,
  },
  linkText: {
    marginTop: 10,
    color: Colors.primarybold,
    textAlign: 'center',
    fontSize: 16,
  },
});
