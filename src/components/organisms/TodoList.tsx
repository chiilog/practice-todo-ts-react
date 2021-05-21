import React from "react";
import { Box, Input, List } from "@chakra-ui/react";

import { TodoItem } from "../molecules/TodoItem";
import { useTodos } from "../../hooks/useTodos";
import { useEditStatus } from "../../hooks/useEditStatus";

export const TodoList = () => {
  console.log("TodoList");
  const { todos, onCompleteTodo, onDeleteTodo, onEditTodo } = useTodos();
  const { onClickStatus, onBlurStatus } = useEditStatus();

  return (
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
  );
};
