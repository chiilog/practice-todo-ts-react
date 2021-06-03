import { Todo, todoFactory } from "../types/todo";
import { Dispatch, Reducer, useReducer } from "react";

type Action<T extends string, P> = {
  type: T;
  payload: P;
};

type AddTodo = Action<"addTodo", Todo>;
type DeleteTodo = Action<"deleteTodo", Todo>;
type UpdateTodo = Action<"updateTodo", Todo>;

export type TodoAction = AddTodo | DeleteTodo | UpdateTodo;

const reducer: Reducer<Todo[], TodoAction> = (todos, action) => {
  switch (action.type) {
    case "addTodo":
      return [...todos, action.payload];
    case "deleteTodo":
      return todos.filter(({ id }) => id !== action.payload.id);
    case "updateTodo":
      return todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    default:
      return todos;
  }
};

const initialState: Todo[] = [
  todoFactory({
    todo: "todo1つ目",
    completed: false,
  }),
  todoFactory({
    todo: "todo2つ目",
    completed: true,
  }),
];

export const useTodoReducer = (): [Todo[], Dispatch<TodoAction>] => {
  return useReducer<Reducer<Todo[], TodoAction>>(reducer, initialState);
};
