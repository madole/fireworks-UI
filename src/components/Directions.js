import { h } from 'preact';
import styled from 'styled-components';
import marker from '../assets/marker.svg';

const GOOGLE_SEARCH_URL = 'https://www.google.com/maps/search/?api=1&query=';

const DirectionsLink = styled.a`
	color: #fff;
	position: relative;
	&::before {
		content: ${'" "'};
		background-image: url("${marker}");
    	background-repeat: no-repeat;
		height: 20px;
		width: 20px;
		position: absolute;
		left: -20px;
		top: 2px;
	}
`;

const Directions = ({ where }) => {
	if (!where) return null;
	const query = where.split(' ').join('+');
	return (
		<DirectionsLink href={GOOGLE_SEARCH_URL + query} target="_blank">
			Directions
		</DirectionsLink>
	);
};

export default Directions;
