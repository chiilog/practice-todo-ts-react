import React, { FC, FormEvent, useRef, useState } from "react";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useTodos } from "../../hooks/useTodos";

export const Header: FC = () => {
  console.log("Header");

  const [todoText, setTodoText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { addTodo } = useTodos();

  const addTodos = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current !== null && inputRef.current.value !== "") {
      addTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <Box bg="red.300" w="100%" textAlign="center" p={4} color="white">
        <Heading as="h1" size="md">
          TODO管理
        </Heading>
      </Box>
      <form onSubmit={addTodos}>
        <Flex m={4}>
          <Box flex="1">
            {todoText}
            <Input
              placeholder="TODOを入力"
              bg="white"
              ref={inputRef}
              onChange={() => {
                setTodoText(todoText);
              }}
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
