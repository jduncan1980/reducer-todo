/** @jsx jsx */
import React, { useReducer } from 'react';
import { jsx, ThemeProvider, Container } from 'theme-ui';
import theme from './theme';
import { todoReducer, initialTodoState } from './reducers/todoReducer';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
	const [state, dispatch] = useReducer(todoReducer, initialTodoState);
	return (
		<ThemeProvider theme={theme}>
			<Container>
				{state.map((todo) => {
					return <TodoItem todo={todo} key={todo.id} dispatch={dispatch} />;
				})}
				<TodoForm dispatch={dispatch} />
			</Container>
		</ThemeProvider>
	);
}

export default App;
