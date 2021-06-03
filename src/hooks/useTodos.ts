import { useContext } from "react";
import { TodosContext, TodosContextType } from "../providers/TodosProvider";
import { Todo } from "../types/todo";

type ReturnType = {
  todos: Todo[];
  toggleTodoState: (id: string) => void;
  deleteTodo: (index: number) => void;
  updateTodo: (text: string, id: string) => void;
  addTodo: (text: string) => void;
};

export const useTodos = (): ReturnType => {
  const { todos, dispatch } = useContext<TodosContextType>(TodosContext);

  const addTodo = (text: string) => {
    dispatch({ type: "addTodo", payload: { text } });
  };

  const toggleTodoState = (id: string) => {
    dispatch({ type: "toggleCompleted", payload: { id } });
  };

  const deleteTodo = (index: number) => {
    dispatch({ type: "deleteTodo", payload: { index } });
  };

  const updateTodo = (text: string, id: string) => {
    dispatch({ type: "updateTodo", payload: { id, text } });
  };

  return {
    todos,
    toggleTodoState,
    deleteTodo,
    updateTodo,
    addTodo,
  };
};
