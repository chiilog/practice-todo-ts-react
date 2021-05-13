import React from "react";
import { Box, ChakraProvider, List } from "@chakra-ui/react";

import theme from "./theme/theme";
import { Header } from "./components/organisms/Header";
import { TodoItem } from "./components/molecules/TodoItem";
import { useAllTodos } from "./hooks/useAllTodos";

export const App = () => {
	const onClickComplete = () => alert("completed!");
	const onClickDelete = () => alert("deleted!");
	const onClickTextFix = () => alert("fix!");

	const { todos } = useAllTodos();

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
						onClickComplete={onClickComplete}
						onClickDelete={onClickDelete}
						onClickTextFix={onClickTextFix}
					/>
				))}
			</List>
		</ChakraProvider>
	);
};
