import React from 'react';
import { Text } from 'theme-ui';

export default function DateCompleted({ time }) {
	return (
		<div>
			<Text>Completed At: {time}</Text>
		</div>
	);
}
