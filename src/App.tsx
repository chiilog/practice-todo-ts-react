import React, { useContext } from "react";
import { Box, ChakraProvider, List } from "@chakra-ui/react";

import theme from "./theme/theme";
import { Header } from "./components/organisms/Header";
import { TodoItem } from "./components/molecules/TodoItem";
import { TodosContext } from "./providers/TodosProvider";

export const App = () => {
	const { todos, setTodos } = useContext(TodosContext);

	const onClickComplete = (index: number) => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	};
	const onClickDelete = (index: number) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
	const onClickTextEdit = (
		event: React.MouseEvent<HTMLInputElement>,
		index: number
	) => {
		const target = event.currentTarget;
		target.readOnly = !target.readOnly;

		const aria = target.attributes.getNamedItem("aria-readonly");
		let ariaBool: string = aria ? aria.value : "false";
		target.setAttribute(
			"aria-readonly",
			ariaBool === "true" ? "false" : "true"
		);
	};
	const onBlurTextEdit = (
		event: React.FocusEvent<HTMLInputElement>,
		index: number
	) => {
		const target = event.currentTarget;
		target.readOnly = true;
	};
	const onChangeTextEdit = (
		event: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const editTodo = [...todos];
		editTodo[index].todo = event.target.value;
		setTodos(editTodo);
	};

	return (
		<ChakraProvider theme={theme}>
			<Header />
			<Box as="p" m={4} fontSize="sm">
				テキストをクリックすると項目を編集できます
			</Box>
			<List my={4} bg="white" boxShadow="md">
				{todos.map((res, index) => (
					<TodoItem
						key={index}
						text={res.todo}
						onClickComplete={() => onClickComplete(index)}
						onClickDelete={() => onClickDelete(index)}
						onClickTextEdit={(
							event: React.MouseEvent<HTMLInputElement>
						) => onClickTextEdit(event, index)}
						onBlurTextEdit={(
							event: React.FocusEvent<HTMLInputElement>
						) => onBlurTextEdit(event, index)}
						onChangeTextEdit={(
							event: React.ChangeEvent<HTMLInputElement>
						) => onChangeTextEdit(event, index)}
						isCompleted={res.completed}
					/>
				))}
			</List>
		</ChakraProvider>
	);
};
