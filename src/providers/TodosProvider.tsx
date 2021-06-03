import React, { createContext, ReactNode, FC, Dispatch } from "react";
import { TodoAction, useTodoReducer } from "../store/todo";

import { Todo } from "../types/todo";

export type TodosContextType = {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
};

export const TodosContext = createContext<TodosContextType>(
  {} as TodosContextType
);

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, dispatch] = useTodoReducer();

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
