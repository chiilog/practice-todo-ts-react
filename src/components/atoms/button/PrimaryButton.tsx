import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
	children: string;
};

export const PrimaryButton = (props: Props) => {
	const { children } = props;

	return (
		<Button colorScheme="red" variant="outline">
			{children}
		</Button>
	);
};
