import { Box, Flex, IconButton, Input, ListItem } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import React, { memo, VFC } from "react";

type Props = {
	text: string;
	onClickComplete: () => void;
	onClickDelete: () => void;
	onClickTextEdit: (e: React.MouseEvent<HTMLInputElement>) => void;
	onBlurTextEdit: (e: React.FocusEvent<HTMLInputElement>) => void;
	onChangeTextEdit: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isCompleted: boolean;
};

export const TodoItem: VFC<Props> = memo((props) => {
	const {
		text,
		onClickComplete,
		onClickDelete,
		onClickTextEdit,
		onBlurTextEdit,
		onChangeTextEdit,
		isCompleted,
	} = props;

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
				<Box mx={1} flex={1}>
					<Input
						value={text}
						variant="unstyle"
						onClick={onClickTextEdit}
						color={isCompleted ? "gray.300" : "black"}
						onBlur={onBlurTextEdit}
						onChange={onChangeTextEdit}
						isReadOnly
						bg="gray.50"
						_readOnly={{ background: "white" }}
					/>
				</Box>
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
});
