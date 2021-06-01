import React, {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
  FC,
  useReducer,
} from "react";
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
  const [todos2, dispatch] = useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={{ todos, setTodos, todos2, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
