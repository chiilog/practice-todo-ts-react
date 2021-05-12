import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme/theme";
import { Header } from "./components/organisms/Header";

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Header />
		</ChakraProvider>
	);
};
