import React from "react";
import { Box, ChakraProvider, Input, List } from "@chakra-ui/react";

import theme from "./theme/theme";
import { Header } from "./components/organisms/Header";
import { TodoItem } from "./components/molecules/TodoItem";
import { useTodos } from "./hooks/useTodos";
import { useEditStatus } from "./hooks/useEditStatus";

export const App = () => {
  console.log("App");
  const { todos, onCompleteTodo, onDeleteTodo, onEditTodo } = useTodos();
  const { onClickStatus, onBlurStatus } = useEditStatus();

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
            onClickComplete={() => onCompleteTodo(index)}
            onClickDelete={() => onDeleteTodo(index)}
            isCompleted={res.completed}
          >
            <Box mx={1} flex={1}>
              <Input
                value={res.todo}
                variant="unstyle"
                color={res.completed ? "gray.300" : "black"}
                isReadOnly
                bg="gray.50"
                _readOnly={{ background: "white" }}
                onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                  onClickStatus(event)
                }
                onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                  onBlurStatus(event)
                }
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  onEditTodo(event, index)
                }
              />
            </Box>
          </TodoItem>
        ))}
      </List>
    </ChakraProvider>
  );
};
