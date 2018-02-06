import { h } from 'preact';
import { format } from 'date-fns';
import styled from 'styled-components';
import CenterFlex from './CenterFlex';

const Container = styled(CenterFlex)`
	height: 400px;
	width: 400px;
	padding: 10px;
	margin: 20px;
	border: 5px solid #fff;
	justify-content: space-between;
	color: #fff;
`;

const Title = styled.h3`
	color: white;
`;
const SubTitle = styled.div`
	color: white;
`;

const Card = ({ item }) => (
	<Container>
		<div>
			<Title>{item.where}</Title>
			<SubTitle>{format(item.date, 'dddd DD MMMM YYYY')}</SubTitle>
		</div>
		<div>{item.type}</div>

		<div>
			From: {item.from} | To: {item.to}
		</div>
	</Container>
);

export default Card;
