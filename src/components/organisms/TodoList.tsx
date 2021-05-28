import React, { FC, ReactNode } from "react";
import { Box, Input, List } from "@chakra-ui/react";

import { TodoItem } from "../molecules/TodoItem";
import { useTodos } from "../../hooks/useTodos";

export const TodoList: FC = () => {
  console.log("TodoList");
  const { todos, toggleTodoState, deleteTodo, updateTodo, todo2 } = useTodos();
  console.log(todo2);

  return (
    <List my={4} bg="white" boxShadow="md">
      {todo2.map<ReactNode>((res, index) => (
        <TodoItem
          key={index}
          onClickComplete={() => toggleTodoState(index)}
          onClickDelete={() => deleteTodo(index)}
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
              onClick={(event: React.MouseEvent<HTMLInputElement>) => {
                const target = event.currentTarget;
                target.readOnly = !target.readOnly;
                target.setAttribute("aria-readonly", `"${target.readOnly}"`);
              }}
              onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
                const target = event.currentTarget;
                target.readOnly = true;
                target.setAttribute("aria-readonly", "true");
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                updateTodo(event.target.value, index)
              }
            />
          </Box>
        </TodoItem>
      ))}
    </List>
  );
};
