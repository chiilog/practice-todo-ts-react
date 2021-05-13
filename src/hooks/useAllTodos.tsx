import { useState } from "react";

import { Todo } from "../types/todo";

export const useAllTodos = () => {
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

	return { todos, setTodos };
};
