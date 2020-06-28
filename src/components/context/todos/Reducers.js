import { GET_TODOS, ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
        loading: false,
      };

    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo._id === action.payload) todo.complete = !todo.complete;

          return todo;
        }),
      };

    default:
      return state;
  }
};
