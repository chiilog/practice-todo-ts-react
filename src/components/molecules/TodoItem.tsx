import { Box, Flex, IconButton, Input, ListItem } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import React, { memo, VFC } from "react";

type Props = {
	text: string;
	onClickComplete: () => void;
	onClickDelete: () => void;
	onClickTextFix: () => void;
	isCompleted: boolean;
};

/**
 * TODO: 完了の場合文字色は薄いグレー（gray.300）でチェックマークは緑（green.500）にする
 */
export const TodoItem: VFC<Props> = memo((props) => {
	const {
		text,
		onClickComplete,
		onClickDelete,
		onClickTextFix,
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
						onClick={onClickTextFix}
						color={isCompleted ? "gray.300" : "black"}
						isReadOnly
					/>
				</Box>
				<IconButton
					aria-label="完了"
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
