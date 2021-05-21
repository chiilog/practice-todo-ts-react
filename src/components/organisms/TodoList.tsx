import React from "react";
import { Box, Input, List } from "@chakra-ui/react";

import { TodoItem } from "../molecules/TodoItem";
import { useTodos } from "../../hooks/useTodos";

export const TodoList = () => {
  console.log("TodoList");
  const { todos, onCompleteTodo, onDeleteTodo, onEditTodo } = useTodos();

  const onClickStatus = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    target.readOnly = !target.readOnly;
    target.setAttribute("aria-readonly", `"${target.readOnly}"`);
  };

  const onBlurStatus = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    target.readOnly = true;
    target.setAttribute("aria-readonly", "true");
  };

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
