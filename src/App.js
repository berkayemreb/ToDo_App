import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import Input from './components/Input';
import ToDo_Card from './components/ToDo_Card';

const App = () => {

  const List = [
    {
      id: 1,
      action: 'Ev temizlenecek',
    },
    {
      id: 2,
      action: 'Yemek yapılacak',
    }
  ]

  const renderToDo = ({ item }) => <ToDo_Card data={item} />

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={List}
        renderItem={renderToDo}
      />
      <Input />
      <StatusBar style='light' />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#393e46'

  }
})

export default App;