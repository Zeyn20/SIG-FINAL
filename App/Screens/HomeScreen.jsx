import { View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import SectionHeading from '../Components/SectionHeading';
import ModuleList from '../Components/ModuleList';
import { getModulos } from '../Services/api';

export default function HomeScreen() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const data = await getModulos();
        setModules(data);
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    fetchModules();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20, marginTop: 25 }}>
      <Header />
      {/* Listado de Modulos */}
      <SectionHeading heading='Modulos' />
      <ModuleList moduleList={modules} />
      <View style={{ height: 20 }}></View>
    </ScrollView>
  );
}