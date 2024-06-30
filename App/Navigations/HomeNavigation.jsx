import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen'
import ModuleDetailScreen from '../Screens/ModuleDetailScreen'
import TabNavigation from './TabNavigation'
import WatchLessons from '../Screens/WatchLessons'

const Stack = createStackNavigator()

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='home' component={TabNavigation} />
      <Stack.Screen name='module-detail' component={ModuleDetailScreen} />
      <Stack.Screen name='watch-lesson' component={WatchLessons} />
    </Stack.Navigator>
  )
}