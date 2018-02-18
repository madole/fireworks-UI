import { h } from 'preact';
import { format } from 'date-fns';
import styled from 'styled-components';
import CenterFlex from './CenterFlex';
import TypeTabs from './TypeTabs';

const Container = styled(CenterFlex)`
	height: 400px;
	width: 400px;
	padding: 10px;
	margin: 20px;
	border: 5px solid #fff;
	justify-content: space-between;
	color: #fff;
	border-radius: 5px;
	&:hover {
		border: 5px solid rgba(255, 255, 255, 0.8);
	}
`;

const Title = styled.h3`
	color: white;
	text-align: center;
`;
const SubTitle = styled.div`
	color: white;
	text-align: center;
`;

const Card = ({ item }) => (
	<Container>
		<div>
			<Title>{item.where}</Title>
			<SubTitle>{format(item.date, 'dddd DD MMMM YYYY')}</SubTitle>
		</div>
		<TypeTabs type={item.type} />

		<div>
			From: {item.from} | To: {item.to}
		</div>
	</Container>
);

export default Card;
