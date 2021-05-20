import React, { FC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
	children: ReactNode;
	onClickButton?: () => void;
	buttonType?: "button" | "submit" | "reset";
};

export const PrimaryButton: FC<Props> = (props) => {
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
};
