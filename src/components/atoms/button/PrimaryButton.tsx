import React, { memo, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
	children: string;
	onClickButton: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
	const { children, onClickButton } = props;

	return (
		<Button colorScheme="red" variant="outline" onClick={onClickButton}>
			{children}
		</Button>
	);
});
