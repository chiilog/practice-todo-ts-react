import { v4 as uuidv4 } from "uuid";

type UUID = string;
export type Todo = {
  id: UUID;
  todo: string | undefined;
  completed: boolean;
};

export const todoFactory = (todo: Partial<Todo>): Todo => {
  return {
    id: uuidv4(),
    todo: "",
    completed: false,
    ...todo,
  };
};
