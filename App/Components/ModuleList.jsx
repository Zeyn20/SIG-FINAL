import { View, FlatList } from 'react-native';
import React from 'react';
import ModuleItem from './ModuleItem';

export default function ModuleList({ moduleList }) {
  return (
    <View>
      <FlatList
        data={moduleList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ModuleItem module={item} />
        )}
      />
    </View>
  );
}
