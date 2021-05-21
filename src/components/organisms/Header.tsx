import React, { FC, FormEvent, useState } from "react";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useTodos } from "../../hooks/useTodos";

export const Header: FC = () => {
  console.log("Header");

  const [todoText, setTodoText] = useState<string>("");
  const { addTodo } = useTodos();

  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const onClickAddTodo = () => {
    if (todoText !== "") {
      addTodo(todoText);
      setTodoText("");
    }
  };

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
