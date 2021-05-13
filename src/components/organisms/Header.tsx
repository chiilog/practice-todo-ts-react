import React, { memo, useState, VFC } from "react";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Header: VFC = memo(() => {
	const [todoText, setTodoText] = useState<string>("");

	const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodoText(event.target.value);
	};

	return (
		<>
			<Box bg="red.300" w="100%" textAlign="center" p={4} color="white">
				<Heading as="h1" size="md">
					TODO管理
				</Heading>
			</Box>
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
					<PrimaryButton>追加</PrimaryButton>
				</Box>
			</Flex>
		</>
	);
});
