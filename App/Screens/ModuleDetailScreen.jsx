import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import ModuleIntro from '../Components/ModuleIntro';
import QuizSection from '../Components/QuizSection';
import EnrollmentSection from '../Components/EnrollmentSection';
import Colors from '../Utils/Colors';
import LessionSection from '../Components/LessionSection';

export default function ModuleDetailScreen() {
  const navigation = useNavigation()
  const route = useRoute();
  const {module} = route.params

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{padding:20, marginTop:35, backgroundColor:Colors.white}}>
      <View style={{display:'flex', flexDirection:'row', alignItems:'center',gap:25}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>
      <Text style={{fontSize:27, fontFamily:'outfit-bold'}}>Detalles del Modulo</Text>
      </View>

      {/* Module intro */}
      <ModuleIntro module={module} />

      {/* Quiz Section */}
      <QuizSection />

      {/* Enroll Section */}
      <EnrollmentSection module={module} />

      {/* Lession Section */}
      <LessionSection capitulo={module.capitulo} />
    </ScrollView>
  )
}