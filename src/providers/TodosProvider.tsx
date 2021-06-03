import React, { createContext, ReactNode, FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { Todo } from "../types/todo";

/**
 * TODO: any型をなおす
 */
export type TodosContextType = {
  todos: Todo[];
  dispatch: any;
};

export const TodosContext = createContext<TodosContextType>(
  {} as TodosContextType
);

/**
 * TODO: any型をなおす
 */
const reducer = (todos: Todo[], action: any) => {
  switch (action.type) {
    case "addTodo":
      return [
        ...todos,
        {
          id: uuidv4(),
          todo: action.payload.text,
          completed: false,
        },
      ];
    case "toggleCompleted":
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "deleteTodo":
      return todos.filter((_, index) => index !== action.payload.index);
    case "updateTodo":
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.text }
          : todo
      );
    default:
      return todos;
  }
};

const initialState: Todo[] = [
  {
    id: uuidv4(),
    todo: "todo1つ目",
    completed: false,
  },
  {
    id: uuidv4(),
    todo: "todo2つ目",
    completed: true,
  },
];

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
