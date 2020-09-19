//todo data type
export interface Todo {
  id: string;
  todo: string;
}

//todo state type

export interface TodoState {
  todos: Todo[];
}

//action constants
export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

//action types

interface FetchTodosAction {
  type: typeof GET_TODOS;
  payload: TodoState;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: TodoState;
}

export type TodoActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | FetchTodosAction;
