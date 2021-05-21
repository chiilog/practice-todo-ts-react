import { useContext } from "react";
import { TodosContext, TodosContextType } from "../providers/TodosProvider";
import { Todo } from "../types/todo";

type ReturnType = {
  todos: Todo[];
  addTodo: (s: string) => void;
  toggleTodoState: (index: number) => void;
  deleteTodo: (index: number) => void;
  updateTodo: (text: string, index: number) => void;
};

export const useTodos = (): ReturnType => {
  /**
   * TODO: ProviderをやめてuseReducerに変える
   */
  const { todos, setTodos } = useContext<TodosContextType>(TodosContext);

  const addTodo = (text: string) => {
    setTodos([...todos, { todo: text, completed: false }]);
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
    addTodo,
    toggleTodoState,
    deleteTodo,
    updateTodo,
  };
};
