import { View, Text, Image, FlatList, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { userData } from '../Components/Header';
import Colors from '../Utils/Colors';

export default function ProfileScreen() {

  const navigation=useNavigation()
  const user = userData[0];

  const menu=[
    {
      id:1,
      name:'Explore',
      path:'Home',
      icon:'search'
    },
    {
      id:2,
      name:'Progeso',
      path:'Progress',
      icon:'book'
    },
    {
      id:3,
      name:'CyberSensei',
      icon:'school',
      url:'https://youtu.be/HmkbBdD8044?si=TUm7uySeCSIz7V5v'
    },
    {
      id:4,
      name:'CyberSensei jeje',
      icon:'logo-youtube',
      url:'https://youtu.be/HmkbBdD8044?si=TUm7uySeCSIz7V5v'
    },
    {
      id:5,
      name:'Salir',
      icon:'power',
    },
  ]

  const onMenuClick = (item)=>{
    if(item?.url)
      {
        Linking.openURL(item.url)
      }
    else if(item.path)
      {
        navigation.navigate(item.path)
      }
  }

  return (
    <View style={{
      padding:20,
      marginTop:20
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:27
      }}>Perfil</Text>
      <View style={{
        alignItems:'center',
        marginTop:20
      }}>
        <Image source={user.imgSrc} style={{
          width:100,
          height:100,
          borderRadius:99
        }} />
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:26
        }}>{user.name}</Text>
        <Text style={{
          fontFamily:'outfit',
          fontSize:18
        }}>{user.email}</Text>
      </View>

      {/* Menu Section */}
      <View style={{
        marginTop:75
      }}>
        <FlatList 
        data={menu}
        renderItem={({item, index})=>(
          <TouchableOpacity onPress={()=>onMenuClick(item)}
          style={{
            display:'flex',
            flexDirection:'row',
            gap:15,
            alignItems:'center',
            marginBottom:25,
            paddingHorizontal:30
          }}>
            <Ionicons name={item.icon} size={34} color={Colors.primarybold} />
            <Text style={{
              fontFamily:'outfit',
              fontSize:22
            }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        />
      </View>
    </View>
  )
}