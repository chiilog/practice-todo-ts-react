import { useContext } from "react";
import { TodosContext, TodosContextType } from "../providers/TodosProvider";
import { Todo } from "../types/todo";

type ReturnType = {
  todos: Todo[];
  toggleTodoState: (id: string) => void;
  deleteTodo: (index: number) => void;
  updateTodo: (text: string, index: number) => void;
  todos2: Todo[];
  addTodo: (text: string) => void;
};

export const useTodos = (): ReturnType => {
  /**
   * TODO: ProviderをやめてuseReducerに変える
   */
  const { todos, setTodos, todos2, dispatch } =
    useContext<TodosContextType>(TodosContext);

  const addTodo = (text: string) => {
    dispatch({ type: "addTodo", payload: { text } });
  };

  const toggleTodoState = (id: string) => {
    dispatch({ type: "toggleCompleted", payload: { id } });
  };

  const deleteTodo = (index: number) => {
    dispatch({ type: "deleteTodo", payload: { index } });
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
    todos2,
    addTodo,
  };
};
