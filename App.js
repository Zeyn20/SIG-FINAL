import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './App/Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import HomeNavigation from './App/Navigations/HomeNavigation';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import SelectAvatarScreen from './App/Screens/SelectAvatarScreen';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './App/Screens/RegisterSrcreen';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="AvatarSelection" component={SelectAvatarScreen} />
      <Stack.Screen name="Home" component={HomeNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
