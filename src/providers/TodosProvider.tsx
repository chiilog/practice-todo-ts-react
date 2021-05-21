import React, {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
  FC,
} from "react";
import { Todo } from "../types/todo";

export type TodosContextType = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export const TodosContext = createContext<TodosContextType>(
  {} as TodosContextType
);

const initialState: Todo[] = [
  {
    todo: "todo1つ目",
    completed: false,
  },
  {
    todo: "todo2つ目",
    completed: true,
  },
];

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(initialState);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
