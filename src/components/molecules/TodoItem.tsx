import { Flex, IconButton, Input, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React, { memo, VFC } from "react";

/**
 * TODO: 完了の場合文字色は薄いグレー（gray.300）でチェックマークは緑（green.500）にする
 */
export const TodoItem: VFC = memo(() => {
	return (
		<ListItem p={4} borderBottom="1px solid" borderBottomColor="gray.100">
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
	);
});
