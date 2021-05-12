import { Box, Flex, IconButton, Input, ListItem } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import React, { memo, VFC } from "react";

type Props = {
	onClickComplete: () => void;
	onClickDelete: () => void;
};

/**
 * TODO: 完了の場合文字色は薄いグレー（gray.300）でチェックマークは緑（green.500）にする
 */
export const TodoItem: VFC<Props> = memo((props) => {
	const { onClickComplete, onClickDelete } = props;

	return (
		<ListItem p={3} borderBottom="1px solid" borderBottomColor="gray.100">
			<Flex alignItems="center">
				<IconButton
					aria-label="完了"
					icon={<CheckIcon />}
					variant="unstyled"
					size="lg"
					color="gray.100"
					_hover={{ color: "green.500" }}
					onClick={onClickComplete}
				/>
				<Box mx={1} flex={1}>
					<Input value="TODOアイテム" variant="unstyle" isReadOnly />
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
