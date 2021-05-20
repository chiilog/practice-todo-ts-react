import { Flex, IconButton, ListItem } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import React, { ReactNode, FC } from "react";

type Props = {
	onClickComplete: () => void;
	onClickDelete: () => void;
	isCompleted: boolean;
	children: ReactNode;
};

export const TodoItem: FC<Props> = (props) => {
	const { onClickComplete, onClickDelete, isCompleted, children } = props;

	return (
		<ListItem p={3} borderBottom="1px solid" borderBottomColor="gray.100">
			<Flex alignItems="center">
				<IconButton
					aria-label="完了"
					icon={<CheckIcon />}
					variant="unstyled"
					size="lg"
					color={isCompleted ? "green.500" : "gray.100"}
					onClick={onClickComplete}
				/>
				{children}
				<IconButton
					aria-label="削除"
					icon={<CloseIcon />}
					variant="unstyled"
					size="md"
					color="red.600"
					onClick={onClickDelete}
				/>
			</Flex>
		</ListItem>
	);
};
