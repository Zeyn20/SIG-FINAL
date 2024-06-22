import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen';
import ProgressScreen from '../Screens/ProgressScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation({onLogout}) {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.primary
    }}>
      <Tab.Screen name='Home' component={HomeScreen} 
      options={{
        tabBarIcon:({color, size})=>(
          <Ionicons name="home" size={size} color={color} />
        ),
        tabBarLabel: ({color})=>(
          <Text style={{color:color}}>Inicio</Text>
        )
      }}
      initialParams={{ onLogout: onLogout }}
      />
      <Tab.Screen name='Progress' component={ProgressScreen} 
      options={{
        tabBarIcon:({color, size})=>(
          <Ionicons name="book" size={size} color={color} />
        ),
        tabBarLabel: ({color})=>(
          <Text style={{color:color}}>Progeso</Text>
        )
      }}
      />
      <Tab.Screen name='Perfil' component={ProfileScreen} 
      options={{
        tabBarIcon:({color, size})=>(
          <Ionicons name="person" size={size} color={color} />
        ),
        tabBarLabel: ({color})=>(
          <Text style={{color:color}}>Perfil</Text>
        )
      }}
      />
    </Tab.Navigator>
  )
}