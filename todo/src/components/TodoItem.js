/** @jsx jsx */
import React from 'react';
import { jsx, Flex, Text } from 'theme-ui';
import { TOGGLE_COMPLETED } from '../reducers/actions';

export default function TodoItem({ dispatch, todo }) {
	const handleClick = () => {
		dispatch({ type: TOGGLE_COMPLETED, payload: todo.id });
		console.log('clicked', todo);
	};
	return (
		<Flex onClick={handleClick} variant='toDoFlex'>
			<Text
				variant='toDoItem'
				sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
			>
				{todo.item}
			</Text>
		</Flex>
	);
}
