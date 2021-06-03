import { useContext } from "react";
import { TodosContext, TodosContextType } from "../providers/TodosProvider";
import { Todo } from "../types/todo";

export const useTodos = (): {
  todos: Todo[];
  deleteTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  addTodo: (todo: Todo) => void;
} => {
  const { todos, dispatch } = useContext<TodosContextType>(TodosContext);

  const addTodo = (todo: Todo) => {
    dispatch({ type: "addTodo", payload: todo });
  };

  const deleteTodo = (todo: Todo) => {
    dispatch({ type: "deleteTodo", payload: todo });
  };

  const updateTodo = (todo: Todo) => {
    dispatch({ type: "updateTodo", payload: todo });
  };

  return {
    todos,
    deleteTodo,
    updateTodo,
    addTodo,
  };
};
