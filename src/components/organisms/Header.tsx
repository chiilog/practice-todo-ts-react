import React, {
	FormEvent,
	useCallback,
	useContext,
	useState,
	VFC,
} from "react";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { TodosContext } from "../../providers/TodosProvider";

export const Header: VFC = () => {
	const [todoText, setTodoText] = useState<string>("");
	const { todos, setTodos } = useContext(TodosContext);

	const onChangeTodoText = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setTodoText(event.target.value);
		},
		[setTodoText]
	);

	const onClickAddTodo = useCallback(() => {
		if (todoText !== "") {
			setTodos([
				...todos,
				{
					id: todos.length + 1,
					todo: todoText,
					completed: false,
				},
			]);
			setTodoText("");
		}
	}, [setTodos, todoText, todos]);
	console.log(todos);

	return (
		<>
			<Box bg="red.300" w="100%" textAlign="center" p={4} color="white">
				<Heading as="h1" size="md">
					TODO管理
				</Heading>
			</Box>
			<form
				onSubmit={(e: FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					onClickAddTodo();
				}}
			>
				<Flex m={4}>
					<Box flex="1">
						<Input
							placeholder="TODOを入力"
							bg="white"
							value={todoText}
							onChange={onChangeTodoText}
						/>
					</Box>
					<Box ml={2}>
						<PrimaryButton buttonType="submit">追加</PrimaryButton>
					</Box>
				</Flex>
			</form>
		</>
	);
};
