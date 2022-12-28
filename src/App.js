import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import Input from './components/Input';
import ToDo_Card from './components/ToDo_Card';
import NumberOfAction from './components/NumberOfAction';

const App = () => {

  const [list, setList] = useState([]);

  const [toDo, setToDo] = useState('');
  const [isActiveBtn, setIsActiveBtn] = useState(false);

  const addToDo = () => {
    setList([...list, {
      action: toDo,
      id: list.length + 1,
      isDone: false,
    }]);
    setToDo('');
    setIsActiveBtn(false);
  }

  const completedToDo = (id) => {
    const newList = list.map(element => {
      if (element.id == id) {
        element.isDone = !element.isDone;
      }
      return element;
    })
    setList(newList);
  }

  useEffect(() => {
    console.log(list);
  }, [list])

  const renderToDo = ({ item }) => <ToDo_Card data={item} completedToDo={completedToDo} />


  return (
    <SafeAreaView style={styles.container}>
      <NumberOfAction list={list} />
      <FlatList
        data={list}
        renderItem={renderToDo}
      />
      <Input toDo={toDo} setToDo={setToDo} addToDo={addToDo} isActiveBtn={isActiveBtn} setIsActiveBtn={setIsActiveBtn} />
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