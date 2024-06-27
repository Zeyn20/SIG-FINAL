import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ModuleData } from './HomeScreen'
import ProgressModuleItem from '../Components/ProgressModuleItem'

export default function ProgressScreen() {
  return (
    <View style={{
      padding: 20,
      marginTop: 25,
      marginBottom:25
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:27
      }}>Mis Modulos</Text>

      {/* Lista de progeso de cursos */}
      <FlatList showsVerticalScrollIndicator={false}
      data={ModuleData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
          <ProgressModuleItem module={item} />
        )}
      />
    </View>
  )
}