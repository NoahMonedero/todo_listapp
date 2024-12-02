import { useState } from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';


export const App = () => { 
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const taskExists = tasks.find((task) => task.name === newTask);

    if(!taskExists) {
      return setTasks([...tasks, {id: tasks.length, name: newTask, completed: false}]);
  }
  return alert('Task already exists');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  return (
    <SafeAreaView style={styles.backgroundDesign}>
      <ToDoList tasks={tasks} completed={removeTask}/>
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundDesign: {
    flex: 1/2,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f0f0f0',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
