import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import {
  Todo,
  TodoState,
  TodoActionTypes,
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
} from './types';

import { v4 as uuidv4 } from 'uuid';

export function fetchTodos(newTodos: TodoState): TodoActionTypes {
  return {
    type: GET_TODOS,
    payload: newTodos,
  };
}

export function thunkFetchTodos(
  key: string
): ThunkAction<void, RootState, unknown, Action<Todo>> {
  return (dispatch: (todos: any) => void) => {
    const storedTodos = localStorage.getItem(key);
    if (!storedTodos) {
      dispatch(fetchTodos({ todos: [] }));
    } else {
      const toArray = JSON.parse(storedTodos);
      dispatch(fetchTodos({ todos: toArray }));
    }
  };
}

export function addTodo(newTodo: Todo): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
}

export function thunkAddTodo(
  key: string,
  todo: string
): ThunkAction<void, RootState, unknown, Action<Todo>> {
  return (dispatch: any, getState) => {
    const newTodo = { id: uuidv4(), todo };

    const oldTodos = localStorage.getItem(key);
    if (!oldTodos) {
      const newTodos = [newTodo];
      localStorage.setItem(key, JSON.stringify(newTodos));
      dispatch(addTodo(newTodo));
    } else {
      const parsedOldTodos = JSON.parse(oldTodos);
      const newTodos = [newTodo, ...parsedOldTodos];
      localStorage.setItem(key, JSON.stringify(newTodos));
      dispatch(addTodo(newTodo));
    }
  };
}

export function deleteTodo(newState: TodoState): TodoActionTypes {
  return {
    type: DELETE_TODO,
    payload: newState,
  };
}

export function thunkDeleteTodo(
  key: string,
  id: string
): ThunkAction<void, RootState, unknown, Action<Todo>> {
  return (dispatch: (todos: any) => void) => {
    const todos = localStorage.getItem(key);
    let parsedTodos: Todo[];
    let newTodos: Todo[];

    if (todos) {
      parsedTodos = JSON.parse(todos);
      newTodos = parsedTodos.filter((todo) => todo.id !== id);
      localStorage.setItem(key, JSON.stringify(newTodos));
      dispatch(deleteTodo({ todos: newTodos }));
    }
  };
}
