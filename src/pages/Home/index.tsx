import React, { useState, useEffect } from 'react';

import { LOCALSTORAGE_KEY } from '../../utils/localstorageKeys';

import {
  thunkAddTodo,
  thunkDeleteTodo,
  thunkFetchTodos,
} from '../../store/todo/actions';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Card from '../../components/Card';

import { SectionTop, SectionBottom } from './styles';
import { Todo } from '../../store/todo/types';

const Home: React.FC = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const selectTodos = (state: RootState) => state.todos.todos;
  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch(thunkFetchTodos(LOCALSTORAGE_KEY));
  }, [dispatch]);

  const textInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
    e.preventDefault();
  };

  const onSaveHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (input.length === 0) return;
    dispatch(thunkAddTodo(LOCALSTORAGE_KEY, input));
    setInput('');
    e.preventDefault();
  };

  const onDeleteHandler = (todo: Todo): void => {
    dispatch(thunkDeleteTodo(LOCALSTORAGE_KEY, todo.id));
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      if (input.length === 0) return;
      dispatch(thunkAddTodo(LOCALSTORAGE_KEY, input));
      setInput('');
    }
  };

  return (
    <>
      <SectionTop>
        <Input
          placeholder="New Item"
          onChangeInput={textInputHandler}
          value={input}
          handleKeyPress={handleKeyPress}
        />
        <Button onSaveHandler={onSaveHandler}>Add</Button>
      </SectionTop>
      <SectionBottom>
        {todos.length < 1 ? (
          <h2 style={{ color: '#777' }}>Nothing to show</h2>
        ) : (
          todos.map((todo: Todo) => (
            <Card
              onDeleteHandler={() => onDeleteHandler(todo)}
              key={todo.id}
              title={todo.todo}
            />
          ))
        )}
      </SectionBottom>
    </>
  );
};

export default Home;
