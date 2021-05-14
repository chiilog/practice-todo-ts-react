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
	const onClickDelete = () => alert("deleted!");
	const onClickTextFix = () => alert("fix!");

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
						onClickDelete={onClickDelete}
						onClickTextFix={onClickTextFix}
						isCompleted={res.completed}
					/>
				))}
			</List>
		</ChakraProvider>
	);
};
