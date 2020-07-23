import React, { useState } from 'react';
import { Flex, Label, Input, Button } from 'theme-ui';
import { ADD_TODO, CLEAR_COMPLETED } from '../reducers/actions';

export default function TodoForm({ dispatch }) {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: ADD_TODO,
			payload: {
				item: inputValue,
				completed: false,
				id: Math.round(Math.random() * 100000),
			},
		});
		setInputValue('');
	};

	const handleClear = () => {
		dispatch({ type: CLEAR_COMPLETED });
	};

	return (
		<Flex as='form' onSubmit={handleSubmit} variant='layout.formContainer'>
			<Label htmlFor='todo'>New Todo</Label>
			<Input name='todo' id='todo' value={inputValue} onChange={handleChange} />
			<Button type='submit'>Add Todo</Button>
			<Button onClick={handleClear}>Clear Completed</Button>
		</Flex>
	);
}
