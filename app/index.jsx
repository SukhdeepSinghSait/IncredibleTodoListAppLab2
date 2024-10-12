import { View, Text } from 'react-native';
import React from 'react';
import ToDoList from '../components/ToDoList.jsx';
import ToDoForm from '../components/ToDoForm.jsx';

const Index = () => {
  return (
    <View>
        <ToDoList />
        <ToDoForm />
    </View>
  )
}


export default Index;