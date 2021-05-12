import React from "react";
import {
	ChakraProvider,
	Flex,
	IconButton,
	Input,
	List,
	ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import theme from "./theme/theme";
import { Header } from "./components/organisms/Header";

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Header />
			<List my={4} bg="white" boxShadow="md">
				<ListItem
					p={4}
					borderBottom="1px solid"
					borderBottomColor="gray.100"
				>
					<Flex alignItems="center">
						<Input value="TODOアイテム" border="none" isReadOnly />
						<IconButton
							aria-label="完了"
							icon={<CheckCircleIcon />}
							variant="unstyled"
							size="lg"
							color="gray.100"
							_hover={{ color: "green.500" }}
						/>
					</Flex>
				</ListItem>
				<ListItem
					p={4}
					borderBottom="1px solid"
					borderBottomColor="gray.100"
				>
					<Flex alignItems="center">
						<Input
							value="TODOアイテム"
							border="none"
							isReadOnly
							color="gray.300"
						/>
						<IconButton
							aria-label="完了"
							icon={<CheckCircleIcon />}
							variant="unstyled"
							size="lg"
							color="green.500"
							_hover={{ color: "gray.100" }}
						/>
					</Flex>
				</ListItem>
			</List>
		</ChakraProvider>
	);
};
