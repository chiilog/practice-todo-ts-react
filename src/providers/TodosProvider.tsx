import React, {
	createContext,
	ReactNode,
	Dispatch,
	SetStateAction,
	useState,
} from "react";
import { Todo } from "../types/todo";

export type TodosContextType = {
	todos: Todo[];
	setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export const TodosContext = createContext<TodosContextType>(
	{} as TodosContextType
);

export const TodosProvider = (props: { children: ReactNode }) => {
	const { children } = props;
	const [todos, setTodos] = useState<Todo[]>([
		{
			id: 1,
			todo: "todo1つ目",
			completed: false,
		},
		{
			id: 2,
			todo: "todo2つ目",
			completed: true,
		},
	]);

	return (
		<TodosContext.Provider value={{ todos, setTodos }}>
			{children}
		</TodosContext.Provider>
	);
};
