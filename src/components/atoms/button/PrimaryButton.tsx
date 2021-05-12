import React, { memo, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
	children: string;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
	const { children } = props;

	return (
		<Button colorScheme="red" variant="outline">
			{children}
		</Button>
	);
});
