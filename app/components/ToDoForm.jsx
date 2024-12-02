import { useState } from 'react';
import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';



const ToDoForm = ( {addTask} ) => {
  const [taskText, setTaskText] = useState('');

  function submitTask() {
    if (taskText === '') {
      return alert('Please enter a task');
    }
    addTask(taskText);
    setTaskText('');
  }

  return (
    <View style={styles.form}>
    <TextInput
      style={styles.input}
      placeholder="Add a new task..."
      onChangeText={(text) => setTaskText(text)}
      value={taskText}
    />
    <Button title="Add Task" onPress={submitTask} />
  </View>
  );
};

export default ToDoForm;


const styles = StyleSheet.create({
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
