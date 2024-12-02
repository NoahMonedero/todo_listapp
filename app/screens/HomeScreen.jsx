import { useState } from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text
} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { useNavigation } from '@react-navigation/native';
import MainLayout from '../layouts/MainLayout';

function HomeScreen() { 
    const navigation = useNavigation();

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
        <MainLayout>
        <SafeAreaView style={styles.backgroundDesign}>
            {tasks.length > 0 ? <ToDoList tasks={tasks} completed={removeTask}/> : <Text style={styles.title}>Add Task</Text>}
            <ToDoForm addTask={addTask} />
            <View style={styles.buttonDesign}>
              <Button
                  title="Go to About"
                  onPress={() => navigation.navigate('About')}
              />
            </View>
        </SafeAreaView>
        </MainLayout>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundDesign: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  buttonDesign:{
    position: 'absolute',
    bottom: 0,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
}
});
