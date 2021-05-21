import React, { useContext } from "react";
import { TodosContext, TodosContextType } from "../providers/TodosProvider";

export const useTodos = () => {
  const { todos, setTodos } = useContext<TodosContextType>(TodosContext);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        todo: text,
        completed: false,
      },
    ]);
  };

  const onCompleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const onDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const onEditTodo = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const editTodo = [...todos];
    editTodo[index].todo = event.target.value;
    setTodos(editTodo);
  };

  return {
    todos,
    addTodo,
    onCompleteTodo,
    onDeleteTodo,
    onEditTodo,
  };
};
