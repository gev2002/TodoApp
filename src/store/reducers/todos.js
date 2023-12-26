import { createReducer } from '@reduxjs/toolkit';
import Toast from 'react-native-simple-toast';
import {
  addTodo, deleteTodo, doneTodo, pinTodo,
} from '../actions/todos';

const initialState = {
  data: [{
    id: '1',
    day: 'Mon Dec 30 2023',
    isDone: true,
    isPin: false,
    task: 'Go to gym',
    time: '19:00',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a typespecimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged.',

  }, {
    id: '2',
    day: 'Mon Dec 25 2023',
    isDone: true,
    isPin: false,
    task: 'Walk with dog',
    time: '12:00',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a typespecimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged.',

  }, {
    id: '3',
    day: 'Mon Dec 12 2023',
    isDone: false,
    isPin: true,
    task: 'Watch a classic movie',
    time: '13:00',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a typespecimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged.',

  }, {
    id: '4',
    day: 'Mon Dec 14 2023',
    isDone: false,
    isPin: true,
    task: "Solve a Rubik's cube",
    time: '16:00',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a typespecimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged.',

  }],
};

export const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.data = [...state.data, action.payload];
    })
    .addCase(deleteTodo, (state, action) => {
      state.data = state.data.filter((t) => t.id !== action.payload);
      Toast.show('Successfully Deleted !!!', Toast.SHORT);
    })
    .addCase(pinTodo, (state, action) => {
      const findTodo = state.data.find((t) => t.id === action.payload);
      findTodo.isPin = !findTodo.isPin;
      const filteredTodos = state.data.filter((t) => t.id !== action.payload);
      state.data = [...filteredTodos, findTodo];
      Toast.show(findTodo.isPin ? 'Successfully Pinned !!!' : 'Successfully Unpinned !!!', Toast.SHORT);
    })
    .addCase(doneTodo, (state, action) => {
      const findTodo = state.data.find((t) => t.id === action.payload);
      findTodo.isDone = !findTodo.isDone;
      const filteredTodos = state.data.filter((t) => t.id !== action.payload);
      state.data = [...filteredTodos, findTodo];
      Toast.show(findTodo.isDone ? 'Successfully Done !!!' : 'Successfully Undone !!!', Toast.SHORT);
    });
});
