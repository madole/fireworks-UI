import { h, Component } from 'preact';
import 'preact-material-components/Card/style.css';
import {
	findTodaysDates,
	findTomorrowsDates,
	findThisMonths,
	findThisWeeks
} from '../../utilties/dateFilters';
import style from './style';
import ItemCard from '../../components/ItemCard';

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

export default class Home extends Component {
	constructor({ data }) {
		super();
		const originalData = mapDatesInData(data);
		this.state = {
			originalData,
			filteredBy: 'Today',
			filteredData: findTodaysDates(originalData)
		};
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

	render({}, { filteredData, filteredBy }) {
		return (
			<div class={style.home}>
				<h1 class={style.title}>
					{filteredBy}'s fireworks displays ({filteredData.length})
				</h1>
				<div class={style.buttonPanel}>
					<button class={style.button} onClick={this.filterByToday}>
						Today
					</button>
					<button
						class={style.button}
						onClick={this.filterByTomorrow}
					>
						Tomorrow
					</button>
					<button class={style.button} onClick={this.filterByWeek}>
						This week
					</button>
					<button class={style.button} onClick={this.filterByMonth}>
						This month
					</button>
				</div>
				<div class={style.cardContainer}>
					{filteredData.length ? (
						filteredData.map(item => <ItemCard item={item} />)
					) : (
						<NoFireworks />
					)}
				</div>
			</div>
		);
	}
}
