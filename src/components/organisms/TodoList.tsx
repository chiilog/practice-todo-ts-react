import React, { FC, ReactNode } from "react";
import { Box, Input, List } from "@chakra-ui/react";

import { TodoItem } from "../molecules/TodoItem";
import { useTodos } from "../../hooks/useTodos";

export const TodoList: FC = () => {
  console.log("TodoList");
  const { todos, deleteTodo, updateTodo } = useTodos();
  console.log(todos);

  return (
    <List my={4} bg="white" boxShadow="md">
      {todos.map<ReactNode>((todo, index) => (
        <TodoItem
          key={index}
          onClickComplete={() => {
            const newTodo = { ...todo, completed: !todo.completed };
            updateTodo(newTodo);
          }}
          onClickDelete={() => deleteTodo(todo)}
          isCompleted={todo.completed}
        >
          <Box mx={1} flex={1}>
            <Input
              value={todo.todo}
              variant="unstyle"
              color={todo.completed ? "gray.300" : "black"}
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const newTodo = { ...todo, todo: event.target.value };
                updateTodo(newTodo);
              }}
            />
          </Box>
        </TodoItem>
      ))}
    </List>
  );
};
