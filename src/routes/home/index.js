import { h, Component } from 'preact';
import 'preact-material-components/Card/style.css';
import styled, { keyframes } from 'styled-components';
import {
	findTodaysDates,
	findTomorrowsDates,
	findThisMonths,
	findThisWeeks
} from '../../utilties/dateFilters';
import style from './style';
import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';
import Card from '../../components/Card';
import CenterFlex from '../../components/CenterFlex';

function mapDatesInData(data) {
	return data.map(item => {
		let [day, month, year] = item.date.split('-').map(x => +x);
		return {
			...item,
			date: new Date(year, month, day)
		};
	});
}

const NoFireworks = () => <div>No fireworks today</div>;

const Title = styled.h1`
	font-size: 54px;
	color: white;
	text-align: center;
	@media (max-width: 600px) {
		font-size: 32px;
	}
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeInDiv = styled(CenterFlex)`
	animation: 2.5s ${fadeIn} ease-out;
`;
const Header = styled(Title)`
	animation: 2.5s ${fadeIn} ease-out;
	align-self: center;
`;

export default class Home extends Component {
	constructor({ data }) {
		super();
		const originalData = mapDatesInData(data);
		this.state = {
			originalData,
			filteredBy: 'Today',
			filteredData: findTodaysDates(originalData),
			loaded: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState(
				{
					loaded: true
				},
				2500
			);
		});
	}

	componentWillReceiveProps({ data }) {
		const originalData = mapDatesInData(data);
		this.state = {
			originalData,
			filteredBy: 'Today',
			filteredData: findTodaysDates(originalData)
		};
	}

	filterByToday = () => {
		this.setState({
			filteredBy: 'Today',
			filteredData: findTodaysDates(this.state.originalData)
		});
	};
	filterByTomorrow = () => {
		this.setState({
			filteredBy: 'Tomorrow',
			filteredData: findTomorrowsDates(this.state.originalData)
		});
	};
	filterByWeek = () => {
		this.setState({
			filteredBy: 'This Week',
			filteredData: findThisWeeks(this.state.originalData)
		});
	};

	filterByMonth = () => {
		this.setState({
			filteredBy: 'This Month',
			filteredData: findThisMonths(this.state.originalData)
		});
	};

	render({}, { filteredData, filteredBy, loaded }) {
		return (
			<CenterFlex>
				{loaded ? (
					<Header>Sydney Fireworks</Header>
				) : (
					<FadeInDiv>
						<Title>
							{filteredBy}'s fireworks displays ({
								filteredData.length
							})
						</Title>
						<Menu>
							<MenuItem
								onClick={this.filterByToday}
								active={filteredBy === 'Today'}
							>
								Today
							</MenuItem>
							<MenuItem
								onClick={this.filterByTomorrow}
								active={filteredBy === 'Tomorrow'}
							>
								Tomorrow
							</MenuItem>
							<MenuItem
								onClick={this.filterByWeek}
								active={filteredBy === 'This Week'}
							>
								This week
							</MenuItem>
							<MenuItem
								onClick={this.filterByMonth}
								active={filteredBy === 'This Month'}
							>
								This month
							</MenuItem>
						</Menu>
						<div class={style.cardContainer}>
							{filteredData.length ? (
								filteredData.map(item => <Card item={item} />)
							) : (
								<NoFireworks />
							)}
						</div>
					</FadeInDiv>
				)}
			</CenterFlex>
		);
	}
}
