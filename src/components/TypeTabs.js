import { h } from 'preact';
import styled from 'styled-components';
import CenterFlex from './CenterFlex';

const Container = CenterFlex.extend`
	flex-wrap: wrap;
	flex-direction: row;
`;
const Tab = styled.div`
	padding: 10px;
	margin: 10px;
	width: 150px;
	border: 2px solid #fff;
	text-align: center;
`;

const TypeTabs = ({ type }) => {
	if (!type) return;
	const types = type.split(',');

	return <Container>{types.map(t => <Tab>{t}</Tab>)}</Container>;
};

export default TypeTabs;
