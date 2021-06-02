import React, {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
  FC,
  useReducer,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { Todo } from "../types/todo";

/**
 * TODO: any型をなおす
 */
export type TodosContextType = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  todos2: Todo[];
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
    case "add":
      return [
        ...todos,
        {
          id: uuidv4(),
          todo: action.text,
          completed: false,
        },
      ];
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
  const [todos, setTodos] = useState<Todo[]>(initialState);
  const [todos2, dispatch] = useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={{ todos, setTodos, todos2, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
