import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from '../screens/todo_screens/TodoList';
import TodoSingle from '../screens/todo_screens/TodoSingle';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
function TodoListNavigations() {
  return (
    <Stack.Navigator initialRouteName="TodoList">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TodoList"
        component={TodoList}
      />
      <Stack.Screen name="TodoSingle" component={TodoSingle} />
      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  );
}

export default TodoListNavigations;
