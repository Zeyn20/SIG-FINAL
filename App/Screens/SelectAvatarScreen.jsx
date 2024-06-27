import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Avatar from '../Components/Avatar'

export default function SelectAvatarScreen() {

  const avatar=[
    {
      id: 1,
      title:'Adulto',
      imgSrc:require('./../../assets/images/osito1.png')
    },
    {
      id:2,
      title:'Joven',
      imgSrc:require('./../../assets/images/osito2.png')
    },
    {
      id:3,
      title:'gey',
      imgSrc:require('./../../assets/images/osito1.png')
    }
  ]

  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginTop: 25
    }}>
      <Text style={{fontSize:26, fontFamily:'outfit-bold', marginBottom: 5}}>Selecciona tu avatar</Text>
    <View style={{
      justifyContent: 'center',
      alignItems:'center',
      width: '100%',
      marginTop: 20,
    }}>
      <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
      data={avatar}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item})=>(
        <Avatar avatar={item} />
      )}
      />
    </View>
    </View>
  )
}