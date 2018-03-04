import { h } from 'preact';

export const purpleBackground = story => (
	<div style={{
		'background-color': 'purple',
		width: '100vw',
		height: '100vh',
		padding: '20px'
	}}
	>
		{story()}
	</div>
);