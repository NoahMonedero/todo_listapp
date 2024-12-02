'use client';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
} from 'react-native';



const ToDoList = ({tasks, completed}) => {

  return (
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({item}) => (
          <Pressable
            style={({pressed}) => (
            {
              margin: 10,
              flex: 1,
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'beige',
              borderWidth: 1,
              borderColor: 'grey',
            })}
            onPress={() => completed(item.id)}
            >
              <View style={[styles.task]}>
                <Text style={styles.taskText}>{item.name}</Text>
              </View>
          </Pressable>
        )}/>
  );
};


export default ToDoList;


const styles = StyleSheet.create({
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
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

