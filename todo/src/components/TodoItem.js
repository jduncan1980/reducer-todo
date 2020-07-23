/** @jsx jsx */
import React from 'react';
import { jsx, Flex, Text } from 'theme-ui';
import { TOGGLE_COMPLETED } from '../reducers/actions';
import DisplayTime from './DisplayTime';
import time from '../utils/time';

export default function TodoItem({ dispatch, todo }) {
	const handleClick = () => {
		dispatch({
			type: TOGGLE_COMPLETED,
			payload: todo.completed
				? { ...todo, completedTime: '' }
				: { ...todo, completedTime: time() },
		});
		console.log('clicked', todo);
	};
	return (
		<Flex onClick={handleClick} variant='toDoFlex'>
			{todo.due && <DisplayTime time={todo.due} type='Due By: ' due={true} />}
			<Text
				variant='toDoItem'
				sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
			>
				{todo.item}
			</Text>

			{todo.completedTime && (
				<DisplayTime time={todo.completedTime} type='Completed At:' />
			)}
		</Flex>
	);
}
