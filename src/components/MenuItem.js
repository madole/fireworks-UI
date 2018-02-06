import styled from 'styled-components';

const MenuItem = styled.div`
	color: white;
	opacity: ${props => (props.active ? 1 : 0.7)};
	cursor: pointer;
	&:hover {
		opacity: 0.9;
	}
`;

export default MenuItem;
