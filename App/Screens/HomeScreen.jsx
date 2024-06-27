import { View, Text, Button, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header';
import SectionHeading from '../Components/SectionHeading';
import ModuleList from '../Components/ModuleList';

export const ModuleData = [
  {
    id: 1,
    title: ' Sistema de prevención de intrusiones (IPS)',
    description: 'Los sistemas de prevención de intrusiones supervisan el tráfico de la red en busca de posibles amenazas y detienen automáticamente las actividades maliciosas.',
    autor: 'David',
    imgSrc:require('./../../assets/images/rocket.jpg'),
    numCap: 5,
    capitulo: [
      { id: 1,
        name: 'Introducción a IPS', 
        descripcion: 'Descripción del capítulo 1 de IPS.', 
        imgCap: require('./../../assets/images/rocket.jpg')},
      { id: 2, 
        name: 'Configuración de IPS', 
        descripcion: 'Descripción del capítulo 2 de IPS.', 
        imgCap: require('./../../assets/images/rocket.jpg')},
      { id: 3, 
        name: 'Monitoreo con IPS', 
        descripcion: 'Descripción del capítulo 3 de IPS.', 
        imgCap: require('./../../assets/images/rocket.jpg')},
      { id: 4, 
        name: 'Respuesta a incidentes con IPS', 
        descripcion: 'Descripción del capítulo 4 de IPS.',
        imgCap: require('./../../assets/images/rocket.jpg')},
      { id: 5, 
        name: 'Mejores prácticas de IPS', 
        descripcion: 'Descripción del capítulo 5 de IPS.', 
        imgCap: require('./../../assets/images/rocket.jpg')},
    ],
    progress: 1
  },
  {
    id: 2,
    title: 'Sistema de Detección de Intrusiones (IDS)',
    description: 'Un IDS supervisa el tráfico de la red e informa de las actividades sospechosas a los equipos de respuesta a incidentes y a las herramientas de ciberseguridad.',
    autor: 'Eyner',
    imgSrc: require('./../../assets/images/ips-ids.jpg'),
    numCap: 4,
    capitulo: [
      { id: 1, 
        name: 'Introducción a IDS', 
        descripcion: 'Descripción del capítulo 1 de IDS.', 
        imgCap: require('./../../assets/images/ips-ids.jpg')},
      { id: 2, 
        name: 'Configuración de IDS', 
        descripcion: 'Descripción del capítulo 2 de IDS.',
        imgCap: require('./../../assets/images/ips-ids.jpg')},
      { id: 3, 
        name: 'Monitoreo con IDS', 
        descripcion: 'Descripción del capítulo 3 de IDS.',
        imgCap: require('./../../assets/images/ips-ids.jpg')},
      { id: 4, 
        name: 'Respuesta a incidentes con IDS', 
        descripcion: 'Descripción del capítulo 4 de IDS.', 
        imgCap: require('./../../assets/images/ips-ids.jpg')},
    ],
    progress: 4
  },
  {
    id: 3,
    title: 'Firewall',
    description: 'Un firewall es un sistema de seguridad de red de las computadoras que restringe el tráfico de Internet entrante, saliente o dentro de una red privada.',
    autor: 'David',
    imgSrc: require('./../../assets/images/firewall.png'),
    numCap: 5,
    capitulo: [
      { id: 1, 
        name: 'Introducción a Firewalls', 
        descripcion: 'Descripción del capítulo 1 de Firewall.',
        imgCap: require('./../../assets/images/firewall.png')},
      { id: 2, 
        name: 'Tipos de Firewalls', 
        descripcion: 'Descripción del capítulo 2 de Firewall.',
        imgCap: require('./../../assets/images/firewall.png')},
      { id: 3, 
        name: 'Configuración de Firewalls', 
        descripcion: 'Descripción del capítulo 3 de Firewall.',
        imgCap: require('./../../assets/images/firewall.png')},
      { id: 4, 
        name: 'Monitoreo con Firewalls', 
        descripcion: 'Descripción del capítulo 4 de Firewall.',
        imgCap: require('./../../assets/images/firewall.png')},
      { id: 5, 
        name: 'Mejores prácticas de Firewalls', 
        descripcion: 'Descripción del capítulo 5 de Firewall.',
        imgCap: require('./../../assets/images/firewall.png')},
    ],
    progress: 3
  },
];

export default function HomeScreen() {

  

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{padding:20, marginTop:25}}>
      <Header />
      {/* Listado de Modulos */}
      <SectionHeading heading='Modulos' />
      <ModuleList moduleList={ModuleData}/>
      <View style={{
        height:20
      }}></View>
    </ScrollView>
  )
}