import React, { FC } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

import theme from "./theme/theme";
import { Header } from "./components/organisms/Header";
import { TodoList } from "./components/organisms/TodoList";

export const App: FC = () => {
  console.log("App");

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box as="p" m={4} fontSize="sm">
        テキストをクリックすると項目を編集できます
      </Box>
      <TodoList />
    </ChakraProvider>
  );
};
