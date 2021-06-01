import { useContext } from "react";
import { TodosContext, TodosContextType } from "../providers/TodosProvider";
import { Todo } from "../types/todo";

type ReturnType = {
  todos: Todo[];
  toggleTodoState: (index: number) => void;
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
    todos2,
    addTodo,
  };
};
