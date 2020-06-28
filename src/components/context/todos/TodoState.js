import React from "react";
import TodoContext from "./TodoContext";
import todoReducer from "./Reducers";
import axios from "axios";
import { GET_TODOS, ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../types";

const TodoState = (props) => {
  const initialState = {
    todos: null,
  };

  const [state, dispatch] = React.useReducer(todoReducer, initialState);

  // Get Todos
  const getTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/todos");
      dispatch({
        type: GET_TODOS,
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Add Todos
  const addTodo = async (todo) => {
    try {
      const res = await axios.post("http://localhost:5000/api/v1/todos", todo);

      dispatch({
        type: ADD_TODO,
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/todos/${id}`);
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
      // getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  // Complete Todo
  const completeTodo = async (todo) => {
    try {
      dispatch({
        type: COMPLETE_TODO,
        payload: todo._id,
      });

      await axios.put(`http://localhost:5000/api/v1/todos/${todo._id}`, todo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        getTodos,
        addTodo,
        deleteTodo,
        completeTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
