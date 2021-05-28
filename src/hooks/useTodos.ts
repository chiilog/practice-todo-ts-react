import { useContext, useReducer } from "react";
import { TodosContext, TodosContextType } from "../providers/TodosProvider";
import { Todo } from "../types/todo";

type ReturnType = {
  todos: Todo[];
  toggleTodoState: (index: number) => void;
  deleteTodo: (index: number) => void;
  updateTodo: (text: string, index: number) => void;
  todo2: Todo[];
  addTodo: (text: string) => void;
};

/**
 * TODO: any型をなおす
 */
const todoReducer = (todos: Todo[], action: any) => {
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

const initialTodos: Todo[] = [
  {
    todo: "todo1つ目",
    completed: false,
  },
  {
    todo: "todo2つ目",
    completed: true,
  },
];

export const useTodos = (): ReturnType => {
  /**
   * TODO: ProviderをやめてuseReducerに変える
   */
  const { todos, setTodos } = useContext<TodosContextType>(TodosContext);
  const [todo2, dispatch] = useReducer(todoReducer, initialTodos);

  const addTodo = (text: string) => {
    dispatch({ type: "add", text: text });
  };

  const toggleTodoState = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const updateTodo = (text: string, index: number) => {
    const newTodos = [...todos];
    newTodos[index].todo = text;
    setTodos(newTodos);
  };

  return {
    todos,
    toggleTodoState,
    deleteTodo,
    updateTodo,
    todo2,
    addTodo,
  };
};
