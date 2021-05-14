import React, { memo, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
	children: string;
	onClickButton?: () => void;
	buttonType: "button" | "submit" | "reset" | undefined;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
	const { children, onClickButton, buttonType } = props;

	return (
		<Button
			colorScheme="red"
			variant="outline"
			onClick={onClickButton}
			type={buttonType}
		>
			{children}
		</Button>
	);
});
