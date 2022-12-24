import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Input from './components/Input';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input />
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