import React from 'react';
import { Text } from 'theme-ui';

export default function DateCompleted({ type, time, due }) {
	React.useEffect(() => {
		console.log(Date.parse(time) > Date.now());
	});
	return (
		<div>
			<Text
				sx={{
					color: Date.parse(time) < Date.now() && due ? 'red' : 'white',
					fontSize: [1, 2],
				}}
			>
				{type} {time}
			</Text>
		</div>
	);
}
