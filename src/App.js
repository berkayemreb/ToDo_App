import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Input from './components/Input';

const App = () => {

  const [text, useText] = useState();


  return (
    <SafeAreaView style={styles.container}>
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