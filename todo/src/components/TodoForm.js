/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, Flex, Label, Input, Button } from 'theme-ui';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ADD_TODO, CLEAR_COMPLETED } from '../reducers/actions';

export default function TodoForm({ dispatch }) {
	const [inputValue, setInputValue] = useState('');
	const [date, setDate] = useState(Date.now());

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	const handleDateChange = (date) => {
		setDate(date);
		console.log(date);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue) {
			dispatch({
				type: ADD_TODO,
				payload: {
					item: inputValue,
					completed: false,
					id: Math.round(Math.random() * 100000),
					completedTime: '',
					due: new Date(date).toString(),
				},
			});
		}
		setInputValue('');
	};

	const handleClear = () => {
		dispatch({ type: CLEAR_COMPLETED });
	};

	return (
		<Flex as='form' onSubmit={handleSubmit} variant='layout.formContainer'>
			<Label htmlFor='todo'>New Todo</Label>
			<Input
				name='todo'
				id='todo'
				value={inputValue}
				onChange={handleInputChange}
			/>
			<Label htmlFor='todo'>Due By</Label>
			<DatePicker
				selected={date}
				onChange={handleDateChange}
				showTimeSelect
				sx={{
					padding: '10px',
					// display: 'block',
					// margin: '20px auto',
					cursor: 'pointer',
				}}
			/>
			<Button type='submit'>Add Todo</Button>
			<Button onClick={handleClear}>Clear Completed</Button>
		</Flex>
	);
}
