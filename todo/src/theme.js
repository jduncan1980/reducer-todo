module.exports = {
	breakpoints: ['24em', '40em', '56em', '64em'],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fonts: {
		body:
			'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
		heading: 'inherit',
		monospace: 'Menlo, monospace',
	},
	fontSizes: [
		'.5rem',
		'1rem',
		'1.5rem',
		'2rem',
		'3rem',
		'4rem',
		'5rem',
		'8rem',
		'12rem',
	],
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	colors: {
		text: '#000',
		background: '#fff',
		primary: '#6e1fad',
		secondary: '#3c22be',
		muted: '#f6f6f6',
		accent: '#ccb81e',
	},
	borders: {
		toDo: '5px inset #ccb81e',
	},
	text: {
		toDoItem: {
			fontSize: [1, 2, 3, 4, 5],
			textTransform: 'capitalize',
			textShadow: '4px 4px 4px black',
		},
	},
	forms: {
		label: {
			fontSize: 1,
			fontWeight: 'bold',
			textAlign: 'center',
		},
		input: {
			borderColor: 'gray',
			'&:focus': {
				borderColor: 'primary',
				outline: 'none',
			},
		},
	},
	buttons: {
		primary: {
			margin: 3,
			padding: 3,
			fontSize: [2, 3],
		},
	},

	layout: {
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			width: ['100%', '95%', '70%', null, null],
		},
		formContainer: {
			flexDirection: 'column',
			m: 4,
		},
	},
	variants: {
		toDoFlex: {
			flexDirection: 'column',
			alignItems: 'center',
			backgroundColor: 'secondary',
			color: 'muted',
			padding: 3,
			margin: 3,
			borderRadius: '10px',
			border: 'toDo',
			boxShadow: '10px 10px 10px -5px rgba(0,0,0,0.75)',
			transition: 'all .4s ease-in',
			'&:hover': {
				boxShadow: '10px 10px 17px -5px rgba(0,0,0,0.75)',
				transform: 'scale(1.1)',
			},
		},
	},
	styles: {
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
			backgroundColor: 'muted',
			fontSize: '62.5%',
			borderSizing: 'border-box',
		},
	},
};
