import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Utils/Colors'
import { useNavigation } from '@react-navigation/native'

export default function EnrollmentSection({module}) {
  const [isEnrolled, setIsEnrolled] = useState(false)
  const navigation = useNavigation()

  const handleEnrollment = () => {
    setIsEnrolled(true)
  }

  const handleContinue = () => {
    // Navegar a la pantalla de lección o cualquier otra pantalla relevante
    navigation.navigate('watch-lesson', {capitulo:module.capitulo});
  };

  return (
    <View style={{
      padding:15,
      backgroundColor:Colors.primary,
      borderRadius:10
    }}>
      {isEnrolled?
      <TouchableOpacity onPress={handleContinue}>
        <Text style={{
        textAlign: 'center',
        fontFamily:'outfit-medium',
        fontSize:15,
        color:Colors.white
      }}
      >Continuar</Text>
      </TouchableOpacity>
      :<TouchableOpacity onPress={handleEnrollment}>
        <Text style={{
        textAlign: 'center',
        fontFamily:'outfit-medium',
        fontSize:15,
        color:Colors.white
      }}
      >Iniciar Modulo</Text>
      </TouchableOpacity>
      }
    </View>
  )
}