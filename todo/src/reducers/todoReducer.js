import { ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from './actions';

export const todoReducer = (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, action.payload];

		case TOGGLE_COMPLETED:
			return state.map((item) => {
				if (item.id === action.payload) {
					return { ...item, completed: !item.completed };
				} else {
					return item;
				}
			});

		case CLEAR_COMPLETED:
			return state.filter((item) => item.completed === false);

		default:
			return state;
	}
};

export const initialTodoState = [
	{
		item: 'Learn about reducers',
		completed: false,
		id: 3892987589,
	},
	{
		item: 'Write reducer',
		completed: false,
		id: 38234987589,
	},
	{
		item: 'Use Reducer',
		completed: false,
		id: 3832987589,
	},
	{
		item: 'dispatch reducer',
		completed: false,
		id: 3894327589,
	},
	{
		item: 'Learn more about reducers',
		completed: false,
		id: 3892764289,
	},
];
