import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './App/Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import HomeNavigation from './App/Navigations/HomeNavigation';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Aquí iría la lógica de autenticación
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      <NavigationContainer>
      {isAuthenticated ? (
        <HomeNavigation onLogout={handleLogout} />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
