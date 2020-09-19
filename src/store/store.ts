import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  TodoState,
  TodoActionTypes,
} from './todo/types';

import { combineReducers } from 'redux';

const initialState: TodoState = {
  todos: [],
};

function todos(state = initialState, action: TodoActionTypes) {
  switch (action.type) {
    case GET_TODOS:
      return {
        todos: [...action.payload.todos],
      };

    case ADD_TODO:
      return {
        todos: [action.payload, ...state.todos],
      };

    case DELETE_TODO:
      return {
        todos: [...action.payload.todos],
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  todos,
});

export type RootState = ReturnType<typeof rootReducer>;
